<?php

    function updateCount($id, $count) {

        $f = fopen('./data.json', 'r');

        if ( !$f ) return false;

        $data = json_decode(fgets($f), true);
        fclose($f);

        foreach($data['rows'] as &$row) {
            foreach($row as &$r) {
                foreach($r['values'] as &$record) {
                    if ( $record['id'] == $id ) {
                        $record['value'] = $count;
                    }
                }
            }
        }

        $rewrite = fopen('./data.json', 'w');

        if ( !$rewrite ) return false;

        fputs($rewrite, json_encode($data));
        fclose($rewrite);

        return true;
    }

    function writeRecord( $record ) {

        $newF = fopen('./records.txt', 'a');

        if ( !$newF ) return false;

        fputs($newF, $record);
        fclose($newF);
        return true;

    }

    function prepareString($conn, $s) {
        return mysqli_real_escape_string($conn, htmlspecialchars($s));
    }

    //require './db.php';

    $conn = mysqli_connect("127.0.0.1", "ilya", "_root", "local_DB");
    $_POST = json_decode(file_get_contents("php://input"), true);

    $id = $_POST["cellData"]["id"];
    $countOfPlaces = $_POST["cellData"]["countOfPlaces"];
    $date = $_POST["cellData"]["dayAndMonth"];
    $time = $_POST["cellData"]["time"];
    $result = json_encode(["errorMessage"=>"Error. Please, try again later"]);
    $isUpdated = false;
    $isWrote = false;

    if ( isset($id) && isset($countOfPlaces) ) {
        $isUpdated = updateCount($id, $countOfPlaces);
    }
    else {
        echo $result;
        die();
    }

    $contactName = $_POST["contact"]["name"];
    $contactPhone = $_POST["contact"]["phone"];
    $contactMail = $_POST["contact"]["mail"];

    $childrenSent = $_POST["children"];

    if (
        isset($contactName) &&
        isset($contactPhone) &&
        isset($contactMail) &&
        isset($date) &&
        isset($time)
    ) {
        $contactName = prepareString($conn, $contactName);
        $contactPhone = prepareString($conn, $contactPhone);
        $contactMail = prepareString($conn, $contactMail);
        $date = prepareString($conn, $date);
        $time = prepareString($conn, $time);
        $record = "";

        $record .= "Дата: " . $date . "\n";
        $record .= "Время: " . $time . "\n";
        $record .= "Контактное лицо: " . $contactName . "\n";
        $record .= "Контактный целефон: " . $contactPhone . "\n";
        $record .= "Контактный email: " . $contactMail . "\n";
        $record .= "Дети (ребенок):\n";

        foreach ($childrenSent as $child) {
            $childName = prepareString($conn, $child["name"]);
            $childAge = prepareString($conn, $child["age"]);

            $record .= "Имя: " . $childName . ", возраст: " . $childAge . "\n";
        }

        $record .= "=====================================\n";

        $isWrote = writeRecord($record);

    }
    else {
        echo $result;
        die();
    }

    if ( $isUpdated && $isWrote )
        $result = json_encode(["Status"=>"Ok"]);
    echo $result;
    die();

?>