<?php
    unset($_COOKIE);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Access</title>
    <link rel="stylesheet" href="/access/access.css">
</head>
<body>

    <div class="container">
        <div class="form">
            <p>Введите ваш логин:</p><input type="text" id="login">
            <p>Введите ваш пароль:</p><input type="password" id="passwd"><br>
            <button id="submit">Войти</button>  
        </div>
    </div>
    
<script src="./access/main.js"></script>
</body>
</html>