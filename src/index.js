import './style.css';
import Score from './modules/Score';
import saveList from './modules/saveList'
import getList  from './modules/getList';
import displayScores from './modules/displayScores';

const form = document.querySelector('form');
const refresh =document.querySelector('#refresh');

window.onload = getList();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const newScore = document.querySelector('#score').value;
    const newEntry = new Score(name, newScore);
    saveList(newEntry);
    displayScores(newEntry);
    form.reset;

})

refresh.addEventListener('click', () => {
    window.location.reload();
})