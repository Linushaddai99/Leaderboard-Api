const container = document.querySelector('#score-box');

const displayScores = (list) => {
  container.innerHTML = '';
  const newList = list.map((item) => {
    const html = document.createElement('li');
    html.innerHTML = `${item.user}: ${item.score}`;
    return html;
  });
  newList.forEach((element) => {
    container.appendChild(element);
  });
};
export default displayScores;