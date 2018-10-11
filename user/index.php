<?php

    session_start();

    $PATHs = [
        "task"=>"./task.php"
    ];

    require_once './php/general/db.php';
    include './php/general/header.php';
    include './php/general/func.php';
    include './php/classes/user.php';

    $user = new User(checkUser($conn));

    $urgent = [];
    $current = [];
    $PART = $user->getGroup();
    $WEEK = identifyWeek();

    $tasks = mysqli_query($conn, " SELECT * FROM `tasks` ");
    while ( $task = mysqli_fetch_assoc($tasks) ) {
        $arr = explode(',', $task["targets"]);
        if ( in_array($user->getId(), $arr) ) {
            if ( calcDays($task["dateToPass"]) <= 7 )
                array_push($urgent, $task);
            else
                array_push($current, $task);
        }
    }
 
?>
        <main>
            <div class="main">

                <div class="topDeadLines">
                    <h2>Срочные задания</h2>
                    <?php
                        foreach($urgent as $item) {
                            echo "<div class='item urgent'>
                                    <a href=/user/task.php?id=" . $item["id"] . "'><p>
                                        <span><b>" . $item['shortDesc'] . "</b></span>
                                        <span>До времени сдачи <b>" . calcDays($item["dateToPass"]) . "</b></span>
										<span data-user-id='" . $user->getId() . "' class='markAsCompleted' id='" . $item["id"] . "'><i class='fas fa-check'></i>Отметить как выполненно</span>
                                    </p></a>
                                </div>";
                        }
                    ?>
                </div>

                <div class="timetable">
                    <h2>Расписание на сегодня, 
					<?php
						$day = "Fri"; //date('D');
						switch ($day) {
							case "Mon":
								echo "понедельник";
								break;
							case "Tue":
								echo "вторник";
								break;
							case "Wed":
								echo "среда";
								break;
							case "Thu":
								echo "четверг";
								break;
							case "Fri":
								echo "пятница";
								break;
							case "Sat":
								echo "суббота";
								break;
							case "Sun":
								echo "воскресенье";
								break;
						}
						echo " " . date("d") . "." . date("m") . "." . date("Y");
					?>
					</h2>
                    <?php
                        $day = 'Fri';//date('D');
						
						if ($day == 'Thu' || $day == 'Sat' || $day == 'Sun') {
							echo '<p> Занятий нет </p>';
						}
						
                        $subjs = mysqli_query($conn, " SELECT * FROM `timetable` WHERE `dayOfWeek`='$day' AND `part`='$PART' AND `week`='$WEEK' ");
                        while($subj = mysqli_fetch_assoc($subjs)) {
                            echo '<p>' . $subj['number'] . '. ' . $subj['name'] . '</p>';
                        }
                    ?>
                </div>

                <div class="allDeadlines">
                <h2>Все задания</h2>
                <?php
                    foreach($current as $item) {
                        echo "<div class='item urgent'>
                                    <a href=/user/task.php?id=" . $item["id"] . "'><p>
                                        <span><b>" . $item['shortDesc'] . "</b></span>
                                        <span>До времени сдачи <b>" . calcDays($item["dateToPass"]) . "</b></span>
										<span data-user-id='" . $user->getId() . "' class='markAsCompleted' id='" . $item["id"] . "'><i class='fas fa-check'></i>Отметить как выполненно</span>
                                    </p></a>
                                </div>";
                        }
                ?>
                </div>

            </div>
            <aside>
                <h2>Заметки</h2>
                <?php
                    $records = mysqli_query($conn, " SELECT * FROM `records` ");
                    while ($record = mysqli_fetch_assoc($records)) {
                        $link = $record["author"]?
                        'https://sun9-4.userapi.com/c830708/v830708338/1074ed/Q3ZIj4jEx3k.jpg' :
                        'https://pp.userapi.com/c836131/v836131526/3d677/8-jv4Q1T-U4.jpg';

                        echo "<div class='show-message'>
						<div class='friend'>
								<img src='" . $link . "' width=45 height=45 />
								<div class='message'>
									<p>" . $record["content"] . "</p>
									<p class='date' style='font-size: 10px;'>" . $record["date"] . " " . $record["time"] . "</p>
								</div>
							</div>
						</div>";
                    }
                ?>
            </aside>
        </main>
<script src="./js/marker.js"></script>
<?php
    include './php/general/footer.php';
?>