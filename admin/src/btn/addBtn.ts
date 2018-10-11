import { Btn } from "./btn";
import { HtmlGenerator } from '../html/generator';
import { AddUrlInputCont } from '../data/structs';

export class AddLinkBtn extends Btn {

    private g = new HtmlGenerator();
    protected btn: Element;

    public insert(btn: Element): void {
        this.btn = btn;
        this.getParent().insertBefore(this.getUrlInput(), this.btn);
    }

    private getUrlInput(): HTMLElement {
        return this.g.generateByNameOfEl(AddUrlInputCont.el, AddUrlInputCont.children);
    }

}