<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<style>
.modalWindow {
    position: fixed;
    width: 35%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;

    background-color: rgba(201, 84, 31, .8);
    border: 1px solid rgba(128,128,128, .5);
    border-radius: 15px;
    padding: 10px 5px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2em;
}

.modalWindow.large {
    width: 80%;
    height: 90vh;
    overflow-y: auto;
    text-align: left;
    font-size: 1.4em;
    padding-left: 20pt;
}

.modalWindow.large span {
    float: right;
    cursor: pointer;
    font-size: 1.8em;
    color: rgba(0, 0, 0, 0.479);
    transition: color .15s;
}

.modalWindow.large span:hover {
    transition: color .15s;
    color: rgba(232, 233, 220, 0.8);
}

.modalWindow.large a {
    font-size: .85em;
}

.modalWindow.large a.addingButton {
    font-size: 1em;
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.479);
    transition: color .15s;
}

.modalWindow.large a.addingButton:hover {
    transition: color .15s;
    color: rgba(232, 233, 220, 0.8);
}

.modalWindow.large input {
    width: 40%;
    height: 25px;
}

.modalWindow.large button {
    font-size: 1.1em;
    cursor: pointer;
    z-index: 20;
    background-color: greenyellow;
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    transition: .2s;
    text-align: center;
    margin-top: 15px;
}

.modalWindow.large button:hover {
    background-color: rgb(214, 252, 158);
    transition: .2s;
}

.modalWindow p {
    color: white;
}

.modalWindow p i {
    margin-right: 1.5%;
}

.modalWindow p i.fa-check-circle {
    color: #3BDA00;
}

.modalWindow p i.fa-exclamation-triangle {
    color: yellow;
}

.modalWindow.startToHide {
    animation-name: hideMW;
    animation-duration: .5s;
    animation-fill-mode: forwards;
}

@keyframes hideMW {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.table {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 100px;
}

.table table {
    width: 100%;
}

.table table tr {
    text-align: center;
}

.table table tr td {
    cursor: pointer;
}

.table table tr.date td:hover {
    cursor: text;
    background-color: rgba(233, 153, 33, 0.4);
}

.table table tr td {
    font-size: 1.2em;
}

.table table tr.header {
    background-color: rgba(50, 50, 179, 0.5);
}

.table table tr.date {
    background-color: rgba(233, 153, 33, 0.5);
}
</style>

    <div class="table">
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
    </div>

<script src="test.js" charset="utf-8"></script>
    
</body>
</html>