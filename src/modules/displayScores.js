// import getList from "./getList";

const container = document.querySelector('#score-box');

const displayScores = (item) => {
    const html = document.createElement('li');
    html.innerHTML = `${item.user}: ${item.score}`;
    container.appendChild(html);
};
export default displayScores;