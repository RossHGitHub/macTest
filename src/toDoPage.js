import { main } from ".";
import { projectArray } from "./projects";

export {load};

function load(proj){

let innerProjectButton=document.createElement('button');
innerProjectButton.innerHTML='Create To-Do Item';
innerProjectButton.addEventListener('click', ()=>{
    newItemInput()
})
main.appendChild(innerProjectButton);
}

function newItemInput(){
    let modalWrapper = document.createElement('div');
    modalWrapper.classList='itemInputWrapper';
    main.appendChild(modalWrapper);

//Close Button
    const modalCloseButton = document.createElement('button');
    modalCloseButton.setAttribute('id', 'itemInfoCloseButton');
    modalCloseButton.innerHTML='x';
    modalCloseButton.classList='itemInputCloseButton';
    modalWrapper.appendChild(modalCloseButton);

//Title
let titleWrapper= document.createElement('div')

let titleTitle = document.createElement('p');
titleTitle.innerHTML='Title:';
titleWrapper.appendChild(titleTitle);

    modalWrapper.appendChild(titleWrapper);
    const projectTitle = document.createElement('input');
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('placeholder', 'Item Name');
    projectTitle.setAttribute('id', 'projectTitle');
    projectTitle.classList='modalTitle';
    titleWrapper.appendChild(projectTitle);


//Info
let infoWrapper= document.createElement('div');

let infoTitle = document.createElement('p');
infoTitle.innerHTML='Description:';
infoWrapper.appendChild(infoTitle);

    modalWrapper.appendChild(infoWrapper);
    const projectInfo = document.createElement('input');
    projectInfo.setAttribute('type', 'text');
    projectInfo.setAttribute('placeholder', 'Description');
    projectInfo.setAttribute('id', 'projectInfo');
    projectInfo.classList='modalTitle';
    infoWrapper.appendChild(projectInfo);

 //Due Date
 let dueDateWrapper= document.createElement('div')

    let dueDateTitle = document.createElement('p');
    dueDateTitle.innerHTML='Due Date:';
    dueDateWrapper.appendChild(dueDateTitle);

    modalWrapper.appendChild(dueDateWrapper);
    const projectDueDate = document.createElement('input');
    projectDueDate.setAttribute('type', 'date');
    projectDueDate.classList='modalTitle';
    dueDateWrapper.appendChild(projectDueDate);


//Priority Check
let priorityWrapper= document.createElement('div')
priorityWrapper.classList='modalPriority';
modalWrapper.appendChild(priorityWrapper);

let priorityTitle = document.createElement('p');
priorityTitle.innerHTML='Priority:';
priorityWrapper.appendChild(priorityTitle);


const projectPriority = document.createElement('input');
projectPriority.setAttribute('type', 'checkbox');
projectPriority.classList='modalTitle';
priorityWrapper.appendChild(projectPriority);


//Enter
const inputConfirm = document.createElement('button');
    inputConfirm.setAttribute('id', 'itemInputConfirmButton')
    inputConfirm.innerHTML='Enter';
    modalWrapper.appendChild(inputConfirm);
}