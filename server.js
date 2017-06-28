/*var http = require('http');

http.get('http://cricapi.com/api/cricket?apikey=80fAXDuXn2PaXSO6smjD3z6ig2p2', function(res) {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('Request Failed.\n' +
                      `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' +
                      `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});*/

var link = "http://cricapi.com/api/cricket?apikey=80fAXDuXn2PaXSO6smjD3z6ig2p2"
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.response);
      document.write(obj.Title);
    }
  };
  xhttp.open("GET", link, true);
  xhttp.send();
}
getData();

//And if you want it to be simple using jQuery.

$.getJSON(link)
  .done(function(data){
  console.log(data.Title)
})