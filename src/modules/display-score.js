const table = document.querySelector('.table-scores');

const displayscores = async () => {
  const result = await fetch (
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7YMDhAdb7FXRHals0VRW/scores/',
  );

  const scoresdata = await result.json();
  let scoresarray = scoresdata.result;
  scoresarray = scoresarray.sort((a,b) => b.score - a.score);
  table.innerHTML='';
  scoresarray.forEach((score) => {
    const tableitem = document.createElement('tr');
    tableitem.innerHTML = `${score.user} : ${score.score}`;
    table.appendChild(tableitem);
  });
};

export default displayscores;