function task(): void {

    interface HtmlEl {
        el: string,
        text: string,
        event?: string,
        callBack?: EventListener
        classN?: string,
        id?: string
    }

    class HtmlGenerator {

        public createModalWindow(els: HtmlEl[]): HTMLElement {
            let mw: HTMLElement = document.createElement("div");
            mw.className = "modalWindow";
            for (let el of this.getMarkup(els)) {
                if ( typeof el != "undefined" ) {
                    mw.appendChild(el)
                }
            }
            return mw;
        }

        private getMarkup(els: HtmlEl[]): HTMLElement[] {
            let flag = true;
            let markup = this.generateMarkup(els);
            let cont: HTMLElement[] = [];
            while (flag) {
                let current = markup.next();
                try {
                    flag = !current.done;
                    cont.push(current.value);
                }
                catch(e) {}
            }
            return cont; 
        }

        private *generateMarkup(els: HtmlEl[]): IterableIterator<any> {
            for (let el of els) {
                let
                    item: HTMLElement = document.createElement(el.el),
                    itemText: Text = document.createTextNode(el.text);
                item.appendChild(itemText);
                item.className = el.classN? el.classN : "";
                item.id = el.id? el.id : "";
                if (el.event)
                    item.addEventListener(el.event, el.callBack);
                yield item;
            }
        }

    }

}

task();