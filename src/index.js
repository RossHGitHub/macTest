import { defaultScreen } from './default';
import { creationModal } from './projectCreationModal';
import './style.css';

export const main = document.getElementById('main');
export const pageTitle = document.getElementById('pageTitle');

const defaultScrn = defaultScreen();
defaultScrn.createDefaultElements();



export function newProject(){
    let newProjectButton = document.getElementById('createProject');
    
    newProjectButton.addEventListener('click', ()=>{
    defaultScrn.clear();
    creationModal();})
 
};
newProject();