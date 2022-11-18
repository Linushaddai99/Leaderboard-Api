import './style.css';
import Score from './modules/Score.js';
import saveList from './modules/saveList.js';
import getList from './modules/getList.js';

const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const newScore = document.querySelector('#score').value;
  const newEntry = new Score(name, newScore);
  saveList(newEntry);
  form.reset();
});

refresh.addEventListener('click', () => {
  getList();
});