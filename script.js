const drumpButton = document.getElementById('drump-button');
const drumpQuoteDiv = document.querySelector('.quote');
const spinner = document.querySelector('.spinner');

const cors = 'https://cors-anywhere.herokuapp.com';
const url = 'https://api.tronalddump.io/random/quote';
const getQuote = (e) => {
  drumpQuoteDiv.innerHTML = '';
  spinner.style.display = 'block';
  drumpButton.style.display = 'none';
  fetch(`${cors}/${url}`)
  .then(response => response.json())
  .then(jsonResponse => {
    const words = jsonResponse.value.split(' ');
    const newWords = words.map(word => {
      if (word.includes('http')) {
        return `<a href="${word}" target="_blank">${word}</a>`;
      }
      return word;
    });
    spinner.style.display = 'none';
    drumpButton.style.display = 'inline';
    drumpQuoteDiv.innerHTML = `<h1>${newWords.join(' ')}</h1>`
  })
  .catch(error => console.error(error));
}

drumpButton.addEventListener('click', getQuote);