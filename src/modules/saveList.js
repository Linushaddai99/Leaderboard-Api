// const saveList = async (entry) => {
//     const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/555quMgBwjbYHxWMGfJG/scores/';
//     await fetch(url, { 
//         method: "POST", 
//         headers:{"Content-Type": "application/json"}, 
//         body: JSON.stringify(entry) 
//     }) .then((res)=> { return res.json()}) 
//     .then(data => { console.log("Data",data)}) 
//     .catch(error=> console.log(error))
// };

const saveList = async (entry) => {
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/555quMgBwjbYHxWMGfJG/scores',
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