export let projectArray = [];
import { main } from ".";
import { pageTitle } from ".";
import { projObj } from "./projectCreationModal";
import { load } from "./toDoPage";

export const Project =()=> {
    


    const pushToArray=(name)=>{
        projectArray.push(name);
        
    }

  
    const style=(name)=>{

        let projectList = document.getElementById('lists');
        let projectName = document.createElement('button');
        projectName.classList='listy';
        projectName.innerHTML=name;
        projectList.appendChild(projectName);
        projectName.addEventListener('click', ()=>{loadProject(name)});
        
        };


            
const projObj=(projTitle)=>{
    let newProjObj={};
    newProjObj.name=projTitle;
    projectArray.push(newProjObj);
    console.log(projectArray);
}
    
    const loadProject=(projName, projObject)=>{
        pageTitle.innerHTML=projName;
        main.innerHTML='';
        load(projName);
        
       

        
    }


    return {pushToArray, style, projObj, loadProject}

}

