// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.datamuse.com/words';
//will be the start of your query string and will narrow your search to words that sounds like your word.
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  //word that goes in box
  const wordQuery = inputField.value;
  //url string with query
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    //tests promise
    if (response.ok) {
      //promise resolves
      return response.json();
    } //promise rejects
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    renderResponse(jsonResponse)
  });

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};
};
submit.addEventListener('click', displaySuggestions);
