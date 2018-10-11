import { InputChecker } from './ic';
import { Http } from './http';

interface InputField {
    type: string,
    value: string,
    name: string
}

export class DataManager {

    private http: Http = new Http();
    private ic: InputChecker = new InputChecker();

    private readonly PATH: string = document.location.origin + "/admin/php/";
    private readonly BODY: HTMLElement = document.body;
    
    private mw: Element = null;
    private inputFields: InputField[] = [];
    private fileToSend: string = this.PATH;

    public collectData(parent: Element): void {

        for (let attr of parent.attributes) {
            if ( attr.name == "file" )
                this.fileToSend += attr.value;
        }
        
        let inputs: HTMLInputElement[] = Array.from(parent.getElementsByTagName("input"));
        let idOfTA: string = parent.getElementsByTagName("textarea")[0].id;
        this.mw = parent;
        let ta: any;

        if ( idOfTA ) {
            ta = document.getElementById(idOfTA);
            this.inputFields.push({
                type: "text",
                value: ta.value,
                name: ta.id
            });
        }

        for ( let input of inputs ) {
            this.inputFields.push({
                type: input.type,
                value: input.value,
                name: input.id
            });
        }

        if (this.inputIsCorrect()) this.send();

        else this.onError("Incorrect input data");

    }

    private inputIsCorrect(): boolean {

        let result: boolean = true;

        for (let field of this.inputFields) {
            let method: Function = this.findMethodForChecking(field.type);
            result = result && this.checkField(method, field.value);
        }

        return result;
    }

    private findMethodForChecking(type: string): Function {
        switch(type) {
            case "text":
            return this.ic.usualStringIsCorrect;
                
            case "url":
            return this.ic.urlIsCorrect;

            case "date":
            return this.ic.dateIsCorrect;

            default:
            return ()=> false;
        }
    }

    private checkField(isCorrect: Function, value: string): boolean {
        try {
            if ( !isCorrect(value) ) {
                throw new Error(value);
            }
            return true;
        }
        catch(e) {
            this.onError(e);
            return false;
        }
    }

    private send(): void {
        this.http.post(this.fileToSend, JSON.stringify(this.inputFields))
            .then(()=> {
                this.onSuccess();
            })
            .catch((error)=> {
                this.onError(error);
            })
    }

    private onSuccess(): void {
        alert("Successfully!");
        this.BODY.removeChild(this.mw);
        this.destructor();
    }

    private onError(mes: string): void {
        alert(mes);
        this.destructor();
    }

    private destructor(): void {
        this.fileToSend = this.PATH;
        this.inputFields = [];
        this.mw = null;
    }

}