import './style.css';
import Score from './modules/Score';
import saveList from './modules/saveList'
import getList  from './modules/getList';

const form = document.querySelector('form');
const list = [];

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const newScore = document.querySelector('#score').value;
    // const newEntry = new Score(name, newScore);
    const payload = {
        user: name,
        score: newScore
    };
    list.push(payload);
    saveList(payload);
    // form.reset
    // setTimeout(getList(), 2000)
    console.log(list);
})