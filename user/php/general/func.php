<?php

    function redirectToAccess() {
        header('Location: /');
    }

    function calcDays($to) {
        $difference = intval(
            (strtotime($to) - strtotime(date('Y-m-d'))) / ( 3600 * 24 )
        );
        return $difference . " " . defineEndOfWord($difference);
    }

    function writeToSess($cont) {
        $_SESSION['id'] = $cont['id'];
        $_SESSION['login'] = $cont['login'];
        $_SESSION['group'] = $cont['groupOfUser'];
    }

    function defineEndOfWord($count) {
        $r = abs($count % 10);
        $exceptions = [ 11, 12, 13, 14 ];
        $word = "";
        if (in_array($count, $exceptions)) {
            $word = "дней";
        }
        elseif ( $r == 1 ) {
            $word = "день";
        }
        elseif ( $r > 1 && $r < 5 ) {
            $word = "дня";
        }
        else {
            $word = "дней";
        }
        return $word;
    }

    function checkUser($conn) {

        $login = isset($_POST['login'])? $_POST['login'] : $_SESSION['login'];
        $group = isset($_POST['group'])? $_POST['group'] : $_SESSION['group'];
        $hash = isset($_POST['hash'])? $_POST['hash'] : $_SESSION['hash'];
        
        if (
            isset($login) &&
            isset($group) &&
            isset($hash)
        ) {

            $checking = mysqli_query($conn, " SELECT * FROM `users` WHERE `login`='" . $login . "' AND `groupOfUser`='" . $group . "' AND `passwd`='" . $hash . "'");

            if ( $check = mysqli_fetch_assoc($checking) ) {
                writeToSess($check);
                return [
                    'id'=>$check['id'],
                    'login'=>$check['login'],
                    'group'=>$check['groupOfUser']
                ];
            } else redirectToAccess();

        } else redirectToAccess();

    }

    function identifyWeek() {
        $date = date('W');
        if ($date%2 === 0) return 2;
        return 1;
    }

?>