
//fetch Post


//sends request
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})

}).then(response => {
  //converts response object to json
  if(response.ok){
	  return response.json();  
  } //handles errors
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
  //handles success
}).then(jsonResponse => {
  return jsonResponse;
})