import ModalWindow from './modalWindow';

class Changer {

    private mw: ModalWindow = new ModalWindow();

    constructor ( private mainImg: any ) { }

    public changeMain(img: HTMLImageElement): void {

        if ( this.isMain(img) ) {
            this.mw.createWindowWithImg(img);
            return;
        }
        else {
            [ this.mainImg.src, img.src ] = [ img.src, this.mainImg.src ];
            console.log(this.mainImg)
        }

    }

    private isMain(img: HTMLImageElement): boolean {
        return img.classList.contains("currentImg");
    }

}

let imgs: any = document.getElementsByClassName("details");
let mainImg: Element = document.getElementsByClassName("currentImg")[0];
const changer = new Changer(mainImg);

for (let img of imgs) {
    img.onclick = ()=> {
        changer.changeMain(img);
    }
}