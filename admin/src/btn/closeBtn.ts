import { Btn } from "./btn";

export class CloseBtn extends Btn {

    protected btn: Element;

    public delete(btn: Element): void {
        this.btn = btn;
        this.getGrand().removeChild(this.getParent());
    }
}