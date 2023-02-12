import { main, pageTitle } from ".";
import { projectArray } from './projects';
export{defaultScreen}

const defaultScreen=()=>{

    const createDefaultElements=()=>{
    let blankMsg = document.createElement('p');
    if (projectArray.length===0){
blankMsg.innerHTML='You have no projects right now.';}
main.appendChild(blankMsg);
    

    };

    


    const clear =()=>{
        main.innerHTML='';
    }


    return {createDefaultElements, clear}

}
