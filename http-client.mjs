import https from 'https';

const url= "https://jsonplaceholder.typicode.com/posts";
const request= https.request(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
}, function(response) {
    response.addListener('data', function(data) {
        console.info(`Receive data from server: ${data.toString()}`);
    })
});

const body= JSON.stringify({
    firstName: 'Rifqi',
    lastName: 'Rayita',
});

request.write(body);
request.end();