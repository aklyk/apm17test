export interface Option {
    name: string,
    value: string
}

export interface HtmlStruct {
    el: string,
    text?: string,
    event?: string,
    callBack?: EventListener,
    children?: HtmlStruct[],
    options?: Option[]
}

export class HtmlGenerator {

    public generateElement(el: HtmlStruct): HTMLElement {
        let mw: HTMLElement = this.generateByNameOfEl(el.el, el.children);

        for (let opt of el.options) {
            mw.setAttribute(opt.name, opt.value);
        }

        return mw;
    }

    public generateByNameOfEl(nameOfEl: string, els: HtmlStruct[]): HTMLElement {
        let mw: HTMLElement = document.createElement(nameOfEl);
        for (let el of this.getMarkup(els)) {
            if ( typeof el != "undefined" ) {
                mw.appendChild(el)
            }
        }
        return mw;
    }

    private getMarkup(els: HtmlStruct[]): HTMLElement[] {
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

    private *generateMarkup(els: HtmlStruct[]): IterableIterator<any> {
        for (let el of els) {
            let item: HTMLElement = this.prepareChildOfEl(el);

            if (el.children) {
                for (let child of el.children) {
                    item.appendChild(this.prepareChildOfEl(child));
                }
            }

            yield item;
        }
    }

    private prepareChildOfEl(child: HtmlStruct): HTMLElement {
        let
            item: HTMLElement = document.createElement(child.el),
            itemText: Text = document.createTextNode(child.text? child.text : ""),
            options: Option[] = child.options? child.options : [];
                
        if (child.text) item.appendChild(itemText);

        for ( let opt of options ) {
            item.setAttribute(opt.name, opt.value);
        }

        if (child.event)
            item.addEventListener(child.event, child.callBack);
            
        return item;
    }

}