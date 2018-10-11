<?php

    $f = fopen('./data.json', 'r');
    $data = fgets($f);
    echo $data;

?>