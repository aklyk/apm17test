<?php

    session_start();

    if (
        isset($_GET["login"]) &&
        isset($_GET["group"]) &&
        isset($_GET["hash"])
    ) {
        $l = htmlspecialchars($_GET["login"]);
        $g = htmlspecialchars($_GET["group"]);
        $h = htmlspecialchars($_GET["hash"]);

        $_SESSION['login'] = $l;
        $_SESSION['group'] = $g;
        $_SESSION['hash'] = $h;

        echo '
        <form action="/user/index.php" method="POST">
            <input type="hidden" name="login" value="' . $l . '">
            <input type="hidden" name="group" value="' . $g . '">
            <input type="hidden" name="hash" value="' . $h . '">
        </form>
        <script>
        (()=>{
            document.getElementsByTagName("form")[0].submit();
        })();
        </script>
        ';
    } else die("Not enaugh parameters");

?>