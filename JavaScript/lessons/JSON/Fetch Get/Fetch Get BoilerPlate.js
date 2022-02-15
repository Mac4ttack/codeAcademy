//fetch GET

//sends request
fetch("http://api-to-call.com/endpoint")
  .then(
    (response) => {
      //converts response object to JSON
      if (response.ok) {
        return response.json();
      }

      //handles errors
      throw new Error("Request failed!");
    },
    (networkError) => console.log(networkError.message)

    //handles success
  ).then((jsonResponse) => {
    // Code to execute with jsonResponse
    return jsonResponse
  });
