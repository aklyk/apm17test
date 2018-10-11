window.onload = function () {
    class ModalWindow {
        onError(mes) {
            alert(mes);
        }
    }
    class InputChecker {
        loginIsCorrect(login) {
            let reg = /[a-zA-Z]/;
            return this.checking(reg, login);
        }
        passwordIsCorrect(passwd) {
            let reg = /[a-zA-Z0-9\_]/;
            return this.checking(reg, passwd);
        }
        checking(reg, value) {
            let res = true;
            for (let v of value) {
                res = res && reg.test(v);
            }
            return res && this.lengthIsCorrect(value);
        }
        lengthIsCorrect(value) {
            return value.length >= 4 && value.length <= 100;
        }
    }
    class DataManeger {
        constructor() {
            this.ic = new InputChecker();
            this.mw = new ModalWindow();
        }
        collectAndSend() {
            try {
                let user = this.collectAndCheck();
                this.send(user)
                    .then((link) => {
                    this.clear();
                    document.location.href = link.toString();
                })
                    .catch((error) => {
                    this.mw.onError(error);
                });
            }
            catch (e) {
                this.mw.onError(e);
            }
        }
        collectAndCheck() {
            this._login = document.getElementById("login"),
                this._passwd = document.getElementById("passwd");
            let login = this._login.value, passwd = this._passwd.value;
            if (!this.ic.loginIsCorrect(login))
                throw new Error("Введите корректный логин (может содержать только буквы)");
            if (!this.ic.passwordIsCorrect(passwd))
                throw new Error("Введите корректный пароль (может содержать буквы и цифры)");
            let user = {
                login,
                passwd
            };
            return user;
        }
        send(user) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest(), data = JSON.stringify(user), response;
                xhr.open("POST", "/access/access.php");
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xhr.send(data);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        response = JSON.parse(xhr.responseText);
                        response.errorMessage ? reject(response.errorMessage) : resolve(response.redirect);
                    }
                };
            });
        }
        clear() {
            this._login.value = "";
            this._passwd.value = "";
        }
    }
    let submit = document.getElementById("submit");
    let dm = new DataManeger();
    submit.onclick = () => dm.collectAndSend();
};
