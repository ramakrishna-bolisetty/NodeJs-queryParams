/* It is demo of how query params work

Input - http://localhost:3000/?name=rama
output - Hello, rama!
*/


const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{
    const queryObject = url.parse(req.url, true).query;
    const name = queryObject.name;
    if(name) {
        res.end(`Hello, ${name}!`);
    }else{
        res.end('Please Enter the name in the URL.');
    }
});

const port = 3001;
server.listen(port, () =>{
    console.log(`Server running at http://localhost:${port} `);
});

