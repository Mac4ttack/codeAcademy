// XMLHttpRequest Post

//creates new object

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

//handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        //code to execute with response
        return xhr.response;
    }
};


// opens request and sends object

xhr.open('POST',url);
xhr.send(data);