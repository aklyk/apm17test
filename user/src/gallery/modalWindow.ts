import { HtmlGenerator, HtmlStruct, Option } from './html/generator';
import Appender from './html/appender';

export default class ModalWindow {

    private hg = new HtmlGenerator();
    private appender = new Appender();

    public createWindowWithImg(img: HTMLImageElement) : void {

        let
            el: string = "img",
            className: string = img.className,
            src: string = img.src

        let options: Option[] = [
            { name: "class", value: className },
            { name: "src", value: src }
        ];
        let hs: HtmlStruct = {
            el,
            options
        };
        let closeBtn: HtmlStruct = {
            el: "span",
            text: "X",
            event: "click",
            callBack: ()=> this.appender.remove(this.hg.BODY, document.getElementsByClassName("detailyWindow")[0])
        };

        let markup: HTMLElement = this.hg.generateWithClassName("detailyWindow beforeShown", closeBtn, hs);
        this.appender.append(this.hg.BODY, markup);

    }

}