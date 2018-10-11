import { AddTaskWindow } from './data/structs';
import { HtmlGenerator } from './html/generator';

function main(): void {

    let gen = new HtmlGenerator();

    let open: HTMLElement = document.getElementById("addTask");

    open.onclick = ()=> document.body.appendChild(gen.generateElement(AddTaskWindow));

}

window.onload = main;