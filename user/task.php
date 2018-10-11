<?php

    session_start();

    require_once './php/general/db.php';
    include_once "./php/general/header.php";
    include_once "./php/general/func.php";
    $subjectId = $_GET["id"] ? mysqli_real_escape_string($conn, $_GET["id"]) : -1;
    
?>
<link rel="stylesheet" href="./css/gallery.min.css">

        <main>

            <div class="gallery">

                <?php
                    if ( $subjectId != -1 ) {
                        $linksForImg = mysqli_query($conn, " SELECT * FROM `imgsForTasks` WHERE `idOfTask`='" . $subjectId . "'");
                        $links = [];
                        $taskInfo = mysqli_query($conn, " SELECT * FROM `tasks` WHERE  `id`='" . $subjectId . "'");
                        $task = mysqli_fetch_assoc($taskInfo);
                        while ( $link = mysqli_fetch_assoc($linksForImg) ) {
                            array_push($links, $link["link"]);
                        }

                        if ( isset($links[0]) ) { ?>
                            <div class="mainImg">
                                <img class="details currentImg" src="<?= $links[0] ?>" alt="Faild to load img">
                            </div>
                        <?php 
                            unset($links[0]);
                            echo '<div class="subImg">';
                            for($i = 1; $i <= 4; $i++) {
                                if (isset($links[$i]))
                                    echo '<img class="details" src="' . $links[$i] . '" alt="Faild to load img">';
                            }
                            echo '</div>';
                        }    
                    ?>

            </div>

            <div class="content">
                <h1><?= $task["shortDesc"] ?></h1>
                <b>Сдать через <?= calcDays($task["dateToPass"]) ?></b><br>
                <h2>Описание:</h2>
                <p><?= $task["allInfo"] ?></p>
                <?php
                    }
                    else { ?>
                    <div class="main">
                    <h2>Все задания</h2>
                    <?php
                        $tasks = mysqli_query($conn, " SELECT * FROM `tasks` ");
                        while($t = mysqli_fetch_assoc($tasks)) {
                            echo "<div class='item'>
                                <p>
                                    <span><b>" . $t['shortDesc'] . "</b></span>
                                    <span>До времени сдачи <b>" . calcDays($t["dateToPass"]) . "</b></span><br>
                                    <span class='more'><a href='http://apm-17/user/task.php?id=" . $t["id"] . "'>Подробнее</a></span>
                                </p>
                            </div>";
                        } ?>
                        </div>
                <?php }
                ?>
            </div>

        </main>

<script src="./js/gallery.js"></script>

<?php
    include "./php/general/footer.php";
?>