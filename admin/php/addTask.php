<?php

    function prepareString($conn, $s) {
        return $s;
        //return mysqli_real_escape_string($conn, htmlspecialchars($s));
    }

    require './db.php';
    $_POST = json_decode(file_get_contents("php://input"), true);
    $result = ["errorMessage"=>"Something went wrong. Please, try again later. 43"];

    foreach( $_POST as $i ) {
        if ( !isset($i["value"]) ) {
            echo json_encode($result);
            die();
        }
    }

    $allInfo = prepareString($conn, $_POST[0]["value"]);
    $shortDesc = prepareString($conn, $_POST[1]["value"]);
    $dateTopass = prepareString($conn, $_POST[2]["value"]);
    $imgs = [];

    if ( isset($_POST[3]) ) {
        $imgs = array_slice($_POST, 3);
    }

    $addTask = mysqli_query($conn, " INSERT INTO `tasks`(`id`, `shortDesc`, `dateToPass`, `allInfo`) VALUES (NULL, '" . $shortDesc . "', '" . $dateTopass . "', '" . $allInfo . "') ");

    $lastId = mysqli_query($conn, " SELECT `id` FROM `tasks` WHERE `shortDesc`='" . $shortDesc . "' AND `dateToPass`='" . $dateTopass . "' AND `allInfo`='" . $allInfo . "'");
    $id = mysqli_fetch_assoc($lastId)["id"];
    $result = ["Status"=>"Ok"];

    foreach ($imgs as $img) {
        $url = $img["value"];

        $addImgsForTask = mysqli_query($conn, " INSERT INTO `imgsForTasks`(`id`, `link`, `idOfTask`) VALUES (NULL, '" . $url . "', '$id') ");
    }

    echo json_encode($result);
    die();

?>