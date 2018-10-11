export interface Option {
    name: string,
    value: string
}

export interface HtmlStruct {
    el: string,
    text?: string,
    event?: string,
    callBack?: EventListener,
    options?: Option[]
}

export class HtmlGenerator {

    public readonly BODY: HTMLElement = document.body;

    public generateWithClassName(classN: string, ...els: HtmlStruct[]): HTMLElement {
        let mw: HTMLElement = document.createElement("div");
        mw.className = classN;
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
            let
                item: HTMLElement = document.createElement(el.el),
                itemText: Text = document.createTextNode(el.text? el.text : ""),
                options: Option[] = el.options? el.options : [];
                
            if (el.text) item.appendChild(itemText);

            for ( let opt of options ) {
                item.setAttribute(opt.name, opt.value);
            }

            if (el.event)
                item.addEventListener(el.event, el.callBack);
            yield item;
        }
    }

}