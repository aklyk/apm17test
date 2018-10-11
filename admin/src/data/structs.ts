import { HtmlStruct } from '../html/generator';
import { CloseBtn } from '../btn/closeBtn';
import { AddLinkBtn } from '../btn/addBtn';
import { DataManager } from '../input/dm';

const cb: CloseBtn = new CloseBtn();
const ab: AddLinkBtn = new AddLinkBtn();
const dm: DataManager = new DataManager();

const Br: HtmlStruct = { // just new line element
    el: "br"
};

// Structure of modal window

const CloseIcon: HtmlStruct = {
    el: "i",
    event: "click",
    callBack: (e)=> cb.delete(e.srcElement),
    options: [
        { name: "class", value: "fas fa-window-close closeBtn" }
    ]
};

const Header: HtmlStruct = {
    el: "h2",
    text: "Добавление задания"
};

const NameOfTaskInput: HtmlStruct = {
    el: "input",
    options: [
        {name: "type", value: "text"},
        {name: "id", value: "nameOfTask"}
    ]
};

const NameOfTask: HtmlStruct = {
    el: "p",
    text: "Название: ",
    children: [NameOfTaskInput]
};

const DateToPassInput: HtmlStruct = {
    el: "input",
    options: [
        {name: "type", value: "date"},
        {name: "id", value: "dateToPass"}
    ]
};

const DateToPass: HtmlStruct = {
    el: "p",
    text: "Дата сдачи: ",
    children: [DateToPassInput]
};

const TextArea: HtmlStruct = {
    el: "textarea",
    options: [
        {name: "id", value: "describtion"}
    ]
};

const AddIcon: HtmlStruct = {
    el: "i",
    options: [
        { name: "class", value: "fas fa-plus-circle" }
    ]
};

const Span: HtmlStruct = {
    el: "span",
    text: "Добавить ссылку на картинку"
};

const AddUrlButton: HtmlStruct = {
    el: "i",
    event: "click",
    callBack: (e)=> ab.insert(e.srcElement.parentElement),
    children: [AddIcon, Span],
    options: [
        { name: "class", value: "add" }
    ]
};

const AddButton: HtmlStruct = {
    el: "button",
    text: "Добавить",
    event: "click",
    callBack: (e)=> dm.collectData(e.srcElement.parentElement),
    options: [
        { name: "id", value: "addTask" },
        { name: "class", value: "btn btn-success" }
    ]
};

const CloseButton: HtmlStruct = {
    el: "button",
    text: "Отмена",
    event: "click",
    callBack: (e)=> cb.delete(e.srcElement),
    options: [
        { name: "id", value: "closeWindow" },
        { name: "class", value: "closeBtn" }
    ]
};

export const AddTaskWindow: HtmlStruct = {
    el: "div",
    children: [
        CloseIcon,
        Header,
        NameOfTask,
        DateToPass,
        TextArea,
        Br,
        AddUrlButton,
        Br,
        AddButton,
        CloseButton
    ],
    options: [
        {name: "class", value: "modalWindow"},
        {name: "file", value: "addTask.php"}
    ]
};

// Structure of input for url

const AddUrlInput: HtmlStruct = {
    el: "input",
    options: [
        {name: "type", value: "url"},
        {name: "class", value: "urlToImg"},
        {name: "placeholder", value: "http://url.ru"}
    ]
};

const DelIcon: HtmlStruct = {
    el: "i",
    event: "click",
    callBack: (e)=> cb.delete(e.srcElement),
    options: [
        { name: "class", value: "fas fa-trash-alt closeBtn" }
    ]
};

export const AddUrlInputCont: HtmlStruct = {
    el: "p",
    children: [AddUrlInput, DelIcon]
};