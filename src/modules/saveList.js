const saveList = async (entry) => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/555quMgBwjbYHxWMGfJG/scores/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(entry),
      }
    );
  };

export default saveList