<?php

    require_once 'db.php';

    $login = $_POST['login']?: $_SESSION['login'];
    $srcOfmg = mysqli_query($conn, " SELECT `img` FROM `users` WHERE `login`='" . $login . "'");
    $srcOfmg = mysqli_fetch_assoc($srcOfmg);
    $srcOfmg = $srcOfmg['img'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>АПМ-17</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/main.min.css">
</head>
<body>
<div class="container">

        <header>
            <div class="nav">
                <nav>
                    <ul>
                        <li><a href="/user">Главная</a></li>
                        <li><a href="#">Предметы</a></li>
                        <li><a href="/user/journal.php">Журнал</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
            <div class="personal">
                <a href="#" title="Личный кабинет"><img src="<?= $srcOfmg ?>"></a>
            </div>
        </header>