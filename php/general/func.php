<?php

    function redirectToAccess() {
        header('Location: /');
    }

    function writeCookie($id, $login, $group) {
        setcookie('id', $id, time() + 3600*60);
        setcookie('login', $login, time() + 3600*60);
        setcookie('group', $group, time() + 3600*60);
    }

    function calcDays($to) {
        $difference = intval(
            (strtotime($to) - strtotime(date('Y-m-d'))) / ( 3600 * 24 )
        );
        return $difference . " " . defineEndOfWord($difference);
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

        $login = $_POST["login"];
        $group = $_POST["group"];
        $hash = $_POST["hash"];
        
        if (
            isset($login) &&
            isset($group) &&
            isset($hash)
        ) {

            $checking = mysqli_query($conn, " SELECT * FROM `users` WHERE `login`='" . $login . "' AND `groupOfUser`='" . $group . "' AND `passwd`='" . $hash . "'");

            if ( $check = mysqli_fetch_assoc($checking) ) {
                writeCookie($check['id'], $check['login'], $check['groupOfUser']);
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