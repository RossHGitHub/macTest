import { main } from ".";
import { defaultScreen } from './default';
import { newProject } from ".";
export {creationModal}
import { Project, projectArray } from "./projects";

function creationModal(){

    let modalWrapper = document.createElement('div');
    modalWrapper.classList='modalWrapper';
    main.appendChild(modalWrapper);


    const projectTitle = document.createElement('input');
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('placeholder', 'Project Title');
    projectTitle.setAttribute('id', 'projectTitle');
    projectTitle.classList='modalTitle';
    modalWrapper.appendChild(projectTitle);

    const projectTitleConfirm = document.createElement('button');
    projectTitleConfirm.innerHTML='Enter';
    modalWrapper.appendChild(projectTitleConfirm);

    const modalCloseButton = document.createElement('button');
    modalCloseButton.setAttribute('id', 'modalClose');
    modalCloseButton.innerHTML='x';
    modalCloseButton.classList='modalCloseButton';
    modalWrapper.appendChild(modalCloseButton);



            
    
    projectTitleConfirm.addEventListener('click', ()=>{
        if (projectTitle.value===''){
            alert('Please enter a Project Title.')} else {
        
        
        let project = Project();
        
         project.projObj(projectTitle.value);
         project.style(projectTitle.value);
        main.removeChild(modalWrapper);
       

            }
        }
        
    );
    
    
    modalCloseButton.addEventListener('click',()=>{
        let defaultscrn = defaultScreen()
        defaultscrn.createDefaultElements();
        main.removeChild(modalWrapper);
    });
}    
