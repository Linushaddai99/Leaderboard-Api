import displayScores from './displayScores.js';

const getList = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/555quMgBwjbYHxWMGfJG/scores',
    { method: 'GET' },
  )
    .then((res) => res.json())
    .then((data) => {
      const list = data.result;
      displayScores(list);
    });
};

export default getList;