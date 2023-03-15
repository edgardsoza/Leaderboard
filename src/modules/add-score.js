const name = document.getElementById('name');
const scores = document.getElementById('score');

const addscore = async () => {
  if (name.value !== '' & scores.value !== '') {
    await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7YMDhAdb7FXRHals0VRW/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: name.value, score: scores.value }),
    });
}
};

export default addscore;