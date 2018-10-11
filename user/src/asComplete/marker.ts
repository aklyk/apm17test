import { assert } from '../general/assertion';
import { Http } from '../general/http';

function marker(): void {

    interface Ids {
        idOfRecord: number,
        idOfUser: number
    }

    class DataManager {

        private ids: Ids;
        private data: string;
        private marker: any;
        private http: Http = new Http();
        private readonly PATH: string = document.location.origin;
        private fileToSend: string = `${this.PATH}/user/php/update/markAsCompleted.php`;

        public collectAndSend(marker: any): void {
            this.marker = marker;
            this.ids = {
                idOfRecord: parseInt(marker.id),
                idOfUser: parseInt(marker.dataset.userId)
            }
            this.stringifyData()
        }

        private stringifyData(): void {
            this.data = JSON.stringify(this.ids);
            this.send();
        }

        private send(): void {
            this.http.post(this.fileToSend, this.data)
                .then(()=> {
                    this.removeTask();
                    this.destructor();
                })
                .catch((error)=> {
                    this.onError(error);
                })
        }

        private removeTask(): void {
            let child = this.marker.parentNode.parentNode;
            let parent = this.marker.parentNode.parentNode.parentNode;
            parent.removeChild(child);
        }

        private destructor(): void {
            this.ids = null;
            this.data = null;
            this.marker = null;
        }

        private onError(mes: string): void {
            alert(mes);
        }

    }

    const dm: DataManager = new DataManager();
    const markers: HTMLCollection = document.getElementsByClassName("markAsCompleted");
    for ( let marker of markers ) {
        marker.addEventListener("click", ()=> {
            dm.collectAndSend(marker);
        });
    }

}

marker();