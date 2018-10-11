<?php

    require_once './php/general/db.php';
    include_once "./php/general/header.php";
    include_once "./php/general/func.php";
    
?>

        <main>

            <div id="info">
                
            </div>

            <table border="1" cellspacing="0" id="mainTable">
                <tbody>
                    <tr class="header" id="tableHeader">
                        <td></td>
                        <td>Пн</td>
                        <td>Вт</td>
                        <td>Ср</td>
                        <td>Чт</td>
                        <td>Пт</td>
                        <td>Сб</td>
                        <td>Вс</td>
                    </tr>
                </tbody>
        </table>

        </main>
    <script src="./js/journal.js"></script>

<?php
    include "./php/general/footer.php";
?>