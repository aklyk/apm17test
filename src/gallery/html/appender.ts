export default class Appender {

    public append(cont: HTMLElement, child: HTMLElement): void {
        cont.appendChild(child);
        this.beautyShow(child);
    }

    public remove(cont: HTMLElement, child: Element): void {
        child.classList.add("beforeHide");
        setTimeout(()=>{
            cont.removeChild(child);
        }, 500);
    }

    private beautyShow(el: HTMLElement): void {
        setTimeout(()=> {
            el.classList.remove("beforeShown");
        }, 700);
    }

} 