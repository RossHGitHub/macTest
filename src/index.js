import { defaultScreen } from './default';
import './style.css';

export const main = document.getElementById('main');
export const pageTitle = document.getElementById('pageTitle');

const defaultScrn = defaultScreen();
defaultScrn.createDefaultElements();
