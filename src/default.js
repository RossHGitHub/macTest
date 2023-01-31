import { main, pageTitle } from ".";

export{defaultScreen}

const defaultScreen=()=>{

    const createDefaultElements=()=>{
    let blankMsg = document.createElement('p');
blankMsg.innerHTML='You have no projects right now.'
main.appendChild(blankMsg);

createNewBtn();
    }

    
    const createNewBtn=()=>{
       let createNewButton = document.createElement('button');
       createNewButton.setAttribute('id', 'createProject');
    createNewButton.innerHTML='Create Project';
    main.appendChild(createNewButton);
    }

    const clear =()=>{
        main.innerHTML='';
    }


    return {createDefaultElements, clear}

}