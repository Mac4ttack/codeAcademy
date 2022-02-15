//async await GET

async function getData() {
  try {
    // sends request
    const response = await fetch("https://api-to-call.com/endpoint");
    //handles response if successful
    if (response.ok) {
      const jsonResponse = await response.json();
      //code to execute with jsonResponse
    }
    //handles response if unsuccessful
    throw new Error("Request Failed!");
  } catch (error) {
    console.log(error);
  }
}


const getData = async () => {
    try {
      const response = await fetch('https://api-to-call.com/endpoint');
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);	
    }
  }