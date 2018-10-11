export class Btn {

    protected btn: Element;

    protected getParent(): Node {
        return this.btn.parentNode;
    }

    protected getGrand(): Node {
        return this.getParent().parentNode;
    }
    
}