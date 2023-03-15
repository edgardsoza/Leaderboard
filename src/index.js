import {addscore} from './modules/add-score.js';
import {displayscores} from './modules/display-score.js';
import './style.css';

const submitbtn = document.querySelector('.submit');
const refreshbtn = document.querySelector('.refresh');

displayscores();

submitbtn.addEventListener ('click', () => {
  addscore();
  document.getElementById('name').value='';
  document.getElementById('score').value='';
});

refreshbtn.addEventListener ('click', () => {
  displayscores();
})