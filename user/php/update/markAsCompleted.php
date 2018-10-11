<?php

    function prepareString($conn, $str) {
        return mysqli_real_escape_string($conn, htmlspecialchars($str));
    }

    require '../general/db.php';
    $_POST = json_decode(file_get_contents("php://input"), true);
    $result = ["errorMessage"=>"Something went wrong. Please, try again later"];

    $idOfRecord = $_POST["idOfRecord"];
    $idOfUser = $_POST["idOfUser"];

    if ( isset($idOfRecord) && isset($idOfUser) ) {
        $idOfRecord = prepareString($conn, $idOfRecord);
        $idOfUser = prepareString($conn, $idOfUser);

        $targets = mysqli_query($conn, " SELECT `targets` FROM `tasks` WHERE `id`='" . $idOfRecord . "'");

        $targets = mysqli_fetch_assoc($targets);
        $newTargets = str_replace(" $idOfUser,", '', $targets['targets']);

        $update = mysqli_query($conn, " UPDATE `tasks` SET `targets`='$newTargets' WHERE `id`='" . $idOfRecord . "'");

        $result = ["Status"=>"Ok"];

    }

    echo json_encode($result);

?>