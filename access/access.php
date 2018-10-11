<?php

    $conn = mysqli_connect("127.0.0.1", "ilya", "_root", "local_DB");
    $_POST = json_decode(file_get_contents("php://input"), true);

    $login = $_POST["login"];
    $passwd = $_POST["passwd"];

    if ( isset($login) && isset($passwd) ) {

        $login = mysqli_real_escape_string($conn, htmlspecialchars($login));
        $passwd = md5(mysqli_real_escape_string($conn, htmlspecialchars($passwd)));

        $user = mysqli_query($conn, " SELECT * FROM `users` WHERE `login`='$login' AND `passwd`='$passwd' ");

        $user = mysqli_fetch_assoc($user);

        if ( isset($user["id"]) ) {
            echo json_encode(['redirect'=>'/access/proxy.php?login=' . $login . '&group=' . $user["groupOfUser"] . '&hash=' . $passwd]);
        }
        else {
            echo json_encode(["errorMessage"=>"Такого пользователя не существует"]);
        }

    }
    else {
        echo json_encode(["errorMessage"=>"Something went wrong"]);
    }

?>