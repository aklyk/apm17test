window.onload = function () {
    const BODY = document.body;
    const PATH = "./";
    const TABLE = document.getElementById("mainTable");
    function log(...x) {
        for (let y of x) {
            console.log(y);
        }
    }
    class InputChecker {
        checkLength(value) {
            let length = value.length;
            return length >= 3 && length <= 100;
        }
        isNumber(phone) {
            let reg = /[0-9]/;
            let result = true;
            for (let i = 0; i < phone.length; i++) {
                result = result && reg.test(phone[i]);
            }
            return result;
        }
        checkMail(mail) {
            let reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            return reg.test(mail);
        }
        checkName(name) {
            let reg = /[а-яА-Я]/;
            let space = /\s/;
            let result = true;
            for (let i = 0; i < name.length; i++) {
                result = result && (reg.test(name[i]) || space.test(name[i]));
            }
            return result;
        }
    }
    class ShowResult {
        prepareWindow(text, iconClass) {
            let mw = document.createElement("div"), par = document.createElement("p"), parText = document.createTextNode(text), icon = document.createElement("i");
            mw.className = "modalWindow";
            icon.className = iconClass;
            par.appendChild(icon);
            par.appendChild(parText);
            mw.appendChild(par);
            return mw;
        }
        appendForAWhile(mw) {
            BODY.appendChild(mw);
            setTimeout(() => {
                mw.classList.add("startToHide");
            }, 2000);
            setTimeout(() => {
                BODY.removeChild(mw);
            }, 2500);
        }
        appendToCont(cont, child) {
            cont.appendChild(child);
        }
    }
    class DataManager {
        constructor() {
            this.sr = new ShowResult();
        }
        prepareAndSend(record) {
            let data = JSON.stringify(record);
            this.send(data)
                .then(() => {
                this.updateCountOfPlaces(record.cellData);
                this.onSuccess();
            })
                .catch((error) => {
                this.onError(error);
            });
        }
        send(data) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest(), response;
                xhr.open("POST", `${PATH}php/addNew.php`);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(data);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        response = JSON.parse(xhr.responseText);
                        response.errorMessage ? reject(response.errorMessage) : resolve();
                    }
                };
            });
        }
        onSuccess() {
            let window = this.sr.prepareWindow("Успешно!", "fas fa-check-circle");
            this.sr.appendForAWhile(window);
            let windowForRemove = document.getElementsByClassName("modalWindow")[0];
            windowForRemove.classList.add("startToHide");
            setTimeout(() => {
                BODY.removeChild(windowForRemove);
            }, 500);
        }
        updateCountOfPlaces(cell) {
            let td = document.getElementById(cell.id.toString());
            td.innerText = cell.countOfPlaces.toString();
        }
        onError(error) {
            let window = this.sr.prepareWindow(`Ошибка. ${error}`, "fas fa-exclamation-triangle");
            this.sr.appendForAWhile(window);
        }
    }
    class DataCollector {
        constructor() {
            this.dm = new DataManager();
            this.ic = new InputChecker();
        }
        collectData(cellData) {
            let childFields = document.getElementsByClassName("childFields");
            let children = [];
            let contactName = document.getElementById("contactFaceInput"), contactPhone = document.getElementById("contactPhoneInput"), contactMail = document.getElementById("contactMailInput");
            let nameVal = contactName.value, phoneVal = contactPhone.value, mailVal = contactMail.value;
            let check = {
                name: nameVal,
                ageOrPhone: phoneVal,
                mail: mailVal
            };
            try {
                this.checkData(check);
            }
            catch (e) {
                this.dm.onError(e);
                return;
            }
            let contact = {
                name: nameVal,
                phone: phoneVal,
                mail: mailVal
            };
            for (let field of childFields) {
                let name = field.getElementsByTagName("input")[0].value;
                let age = parseInt(field.getElementsByTagName("input")[1].value);
                let check = {
                    name: name,
                    ageOrPhone: age.toString()
                };
                try {
                    this.checkData(check);
                }
                catch (e) {
                    this.dm.onError(e);
                    return;
                }
                let child = {
                    name,
                    age
                };
                children.push(child);
            }
            let record = {
                children,
                contact,
                cellData
            };
            this.dm.prepareAndSend(record);
        }
        checkData(obj) {
            let nameIsCorrect = this.ic.checkLength(obj.name) && this.ic.checkName(obj.name);
            let mailIsCorrect = obj.mail ? this.ic.checkMail(obj.mail) : true;
            let phoneIsCorrect = this.ic.isNumber(obj.ageOrPhone);
            if (!nameIsCorrect) {
                throw new Error("Пожалуйста, введите корректное имя (может содержать только буквы)");
            }
            if (!phoneIsCorrect) {
                throw new Error("Пожалуйста, введите корректный номер телефона (может содержать цифры)");
            }
            if (!mailIsCorrect) {
                throw new Error("Пожалуйста, введите корректный адрес электронной почты");
            }
        }
    }
    class ModalWindow {
        constructor() {
            this.dc = new DataCollector();
        }
        openMW(cellData) {
            let formMW = this.prepareMW(cellData);
            this.renderMW(formMW);
        }
        prepareMW(cellData) {
            let divMW = document.createElement("div"), datePar = document.createElement("p"), dateContent = document.createElement("b"), dateContentText = document.createTextNode(`Дата: ${cellData.dayAndMonth} (${cellData.dayOfWeek})`), timePar = document.createElement("p"), timeContent = document.createElement("b"), timeContentText = document.createTextNode(`Время: ${cellData.time}`), countOfPlaces = document.createElement("p"), countOfPlacesContent = document.createElement("b"), countOfPlacesText = document.createTextNode(`Незанятых мест: ${cellData.countOfPlaces}`), addChild = document.createElement("a"), addChildText = document.createTextNode("Добавить ребенка"), addIcon = document.createElement("i"), contactFace = document.createElement("p"), contactFaceText = document.createTextNode("Контактное лицо: "), contactFaceInput = document.createElement("input"), contactPhone = document.createElement("p"), contactPhoneText = document.createTextNode("Контактный телефон: "), contactPhoneInput = document.createElement("input"), contactMail = document.createElement("p"), contactMailText = document.createTextNode("Контактный email: "), contactMailInput = document.createElement("input"), politic = document.createElement("p"), politicText = document.createTextNode("Нажимая кнопку «Отправить», вы соглашаетесь на обработку предоставляемых персональных данных"), submit = document.createElement("button"), close = document.createElement("span"), br = document.createElement("br"), allEl = [];
            divMW.className = "modalWindow large";
            dateContent.appendChild(dateContentText);
            datePar.appendChild(dateContent);
            timeContent.appendChild(timeContentText);
            timePar.appendChild(timeContent);
            countOfPlacesContent.appendChild(countOfPlacesText);
            countOfPlaces.appendChild(countOfPlacesContent);
            addIcon.className = "fas fa-plus-circle";
            addChild.appendChild(addIcon);
            addChild.appendChild(addChildText);
            addChild.className = "addingButton";
            addChild.addEventListener("click", () => {
                let fields = this.createFieldsForChild();
                if (cellData.countOfPlaces <= 0) {
                    return;
                }
                countOfPlacesContent.innerText = `Незанятых мест: ${--cellData.countOfPlaces}`;
                divMW.insertBefore(fields, addChild);
            });
            contactFace.appendChild(contactFaceText);
            contactFaceInput.id = "contactFaceInput";
            contactPhone.appendChild(contactPhoneText);
            contactPhoneInput.id = "contactPhoneInput";
            contactMail.appendChild(contactMailText);
            contactMailInput.id = "contactMailInput";
            politic.appendChild(politicText);
            submit.innerText = "Отправить";
            submit.onclick = () => this.dc.collectData(cellData);
            close.innerText = "X";
            close.onclick = () => this.closeMW(divMW);
            allEl.push(close, datePar, timePar, countOfPlaces, addChild, contactFace, contactFaceInput, contactPhone, contactPhoneInput, contactMail, contactMailInput, politic, submit);
            for (let el of allEl) {
                divMW.appendChild(el);
            }
            return divMW;
        }
        createFieldsForChild() {
            let cont = document.createElement("div"), firstSecondName = document.createElement("p"), firstSecondNameText = document.createTextNode("Фамилия и имя ребенка: "), firstSecondNameInput = document.createElement("input"), ageOfChild = document.createElement("p"), ageOfChildText = document.createTextNode("Возраст ребенка: "), ageOfChildInput = document.createElement("input");
            firstSecondName.appendChild(firstSecondNameText);
            firstSecondNameInput.type = "text";
            firstSecondNameInput.className = "firstLastName";
            ageOfChild.appendChild(ageOfChildText);
            ageOfChildInput.type = "number";
            ageOfChildInput.className = "age";
            cont.className = "childFields";
            cont.appendChild(firstSecondName);
            cont.appendChild(firstSecondNameInput);
            cont.appendChild(ageOfChild);
            cont.appendChild(ageOfChildInput);
            return cont;
        }
        closeMW(window) {
            window.classList.contains("modalWindow") ?
                window.classList.add("startToHide") :
                window.className = "modalWindow startToHide";
            setTimeout(() => {
                BODY.removeChild(window);
            }, 600);
        }
        renderMW(divMW) {
            BODY.appendChild(divMW);
        }
    }
    class LoaderTable {
        constructor() {
            this.sr = new ShowResult();
            this.mw = new ModalWindow();
            this.dm = new DataManager();
        }
        load() {
            this.loadTable()
                .then((response) => {
                for (let c = 0; c < 4; c++) {
                    let date = this.prepareTable(response.dates[c]);
                    this.sr.appendToCont(TABLE, date);
                    let booked = this.prepareBooked(response.rows[c], response.dates[c]);
                    for (let i = 0; i < 5; i++) {
                        this.sr.appendToCont(TABLE, booked.next().value);
                    }
                }
            })
                .catch((error) => {
                this.dm.onError(error);
            });
        }
        loadTable() {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest(), response;
                xhr.open("POST", `${PATH}php/test.php`);
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send();
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        response = JSON.parse(xhr.responseText);
                        response.errorMessage ? reject(response.errorMessage) : resolve(response);
                    }
                };
            });
        }
        prepareTable(dates) {
            let date = document.createElement("tr");
            date.className = "date";
            for (let i of dates) {
                let td = document.createElement("td");
                td.innerText = i;
                date.appendChild(td);
            }
            return date;
        }
        *prepareBooked(arr, dates) {
            for (let obj of arr) {
                let time = document.createElement("tr");
                let timeCont = document.createElement("td");
                obj.time = obj.time.replace(".", ":");
                timeCont.innerText = obj.time;
                time.appendChild(timeCont);
                for (let val of obj.values) {
                    let booked = document.createElement("td");
                    let idx = obj.values.indexOf(val);
                    booked.innerText = val.value == "0" ? "-" : val.value;
                    booked.id = val.id;
                    if (val.value !== "-" && val.value !== "0") {
                        booked.className = dates[idx + 1];
                        booked.addEventListener("click", () => {
                            let cellData = this.identifyCell(booked, idx);
                            this.mw.openMW(cellData);
                        });
                    }
                    time.appendChild(booked);
                }
                yield time;
            }
        }
        identifyCell(cell, idx) {
            let header = document.getElementById("tableHeader");
            let parent = cell.parentNode;
            let dayOfWeek = header.getElementsByTagName("td")[idx + 1].innerText;
            let countOfPlaces = parseInt(cell.innerText);
            let dayAndMonth = cell.className;
            let time = parent.getElementsByTagName("td")[0].innerText;
            let cellData = {
                id: parseInt(cell.id),
                dayOfWeek,
                countOfPlaces,
                dayAndMonth,
                time
            };
            return cellData;
        }
    }
    let loader = new LoaderTable();
    loader.load();
};