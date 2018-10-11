interface Request {
    method: string,
    file: string,
    data: string
}

export class Http {

    public post(file: string, data: string): Promise<any> {
        let r: Request = {
            method: "POST",
            file,
            data
        };

        return this.sendRequest(r);
    }

    public get(file: string, data: string): Promise<any> {
        let r: Request = {
            method: "GET",
            file,
            data
        };

        return this.sendRequest(r);
    }

    private sendRequest(r: Request): Promise<any> {
        return new Promise<any>((resolve, reject)=> {
            let
                xhr = new XMLHttpRequest(),
                response;

            xhr.open(r.method, r.file);
            if ( r.method == "POST" )
                xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(r.data);

            xhr.onreadystatechange = ()=> {
                if ( xhr.readyState == 4 && xhr.status == 200 ) {
                    response = JSON.parse(xhr.responseText);
                    response.errorMessage? reject(response.errorMessage) : resolve(response);
                }
            }
        });
    }

}