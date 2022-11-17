const getList = async () => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/555quMgBwjbYHxWMGfJG/scores',
    )
      .then((res) => res.json())
      .then((data) => {
        lists = data.result;
        console.log(list);
      });
    }

export default getList