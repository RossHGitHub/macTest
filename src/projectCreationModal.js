import { main } from ".";
import { defaultScreen } from './default';
import { newProject } from ".";
export {creationModal}


function creationModal(){
    let modalWrapper = document.createElement('div');
    modalWrapper.classList='modalWrapper';
    main.appendChild(modalWrapper);


    const projectTitle = document.createElement('input');
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('placeholder', 'Project Title');
    projectTitle.classList='modalTitle';
    modalWrapper.appendChild(projectTitle);

    const projectTitleConfirm = document.createElement('button');
    projectTitleConfirm.innerHTML='Enter';
    modalWrapper.appendChild(projectTitleConfirm);

    const modalCloseButton = document.createElement('button');
    modalCloseButton.innerHTML='x';
    modalCloseButton.classList='modalCloseButton';
    modalWrapper.appendChild(modalCloseButton);


    modalCloseButton.addEventListener('click',()=>{
        let defaultscrn = defaultScreen()
        defaultscrn.createDefaultElements();
        main.removeChild(modalWrapper);
        newProject();
    });
            projectTitleConfirm.addEventListener('click', ()=>{
                let projectList = document.getElementById('lists');
                let projectName = document.createElement('li');
                projectName.innerHTML=projectTitle.value;
                projectList.appendChild(projectName);

            });
        }
    
