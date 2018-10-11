export class InputChecker {

    public usualStringIsCorrect(str: string): boolean {
        let reg: RegExp = /[а-яА-Яa-zA-Z0-9\s\.\,]/;
        let res: boolean = true;

        for (let letter of str) {
            res = res && reg.test(letter);
        }

        return res;
    }

    public dateIsCorrect(date: string): boolean {
        let reg: RegExp = /\d{4}\-\d{1,2}\-\d{1,2}/;
        return reg.test(date);
    }

    public urlIsCorrect(url: string): boolean {
        let reg: RegExp = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
        return reg.test(url);
    }

}