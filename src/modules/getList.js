import displayScores from '../modules/displayScores'

const getList = async () => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/555quMgBwjbYHxWMGfJG/scores',
      { method: 'GET'}
    )
      .then((res) => res.json())
      .then((data) => {
       const list = data.result;
        list.forEach(item => displayScores(item));
      });
    }

export default getList