import { main, pageTitle } from ".";

export{defaultScreen}

const defaultScreen=()=>{

    const createDefaultElements=()=>{
    let blankMsg = document.createElement('p');
blankMsg.innerHTML='You have no projects right now.'
main.appendChild(blankMsg);

    const createNew = document.createElement('button');
    createNew.innerHTML='Create Project';
    main.appendChild(createNew);
    createNew.addEventListener('click', createProject());

    }

    const createProject = () =>{

        
    }

    return {createDefaultElements}

}