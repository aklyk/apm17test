function task() {
    class HtmlGenerator {
        createModalWindow(els) {
            let mw = document.createElement("div");
            mw.className = "modalWindow";
            for (let el of this.getMarkup(els)) {
                if (typeof el != "undefined") {
                    mw.appendChild(el);
                }
            }
            return mw;
        }
        getMarkup(els) {
            let flag = true;
            let markup = this.generateMarkup(els);
            let cont = [];
            while (flag) {
                let current = markup.next();
                try {
                    flag = !current.done;
                    cont.push(current.value);
                }
                catch (e) { }
            }
            return cont;
        }
        *generateMarkup(els) {
            for (let el of els) {
                let item = document.createElement(el.el), itemText = document.createTextNode(el.text);
                item.appendChild(itemText);
                item.className = el.classN ? el.classN : "";
                item.id = el.id ? el.id : "";
                if (el.event)
                    item.addEventListener(el.event, el.callBack);
                yield item;
            }
        }
    }
}
task();
