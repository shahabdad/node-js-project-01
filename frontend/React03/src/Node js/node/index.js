const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from home page');
});

app.get('/about', (req, res) => {
    return res.send("Hello about from");
});

const myServer = http.createServer(app);
myServer.listen(8000, () => console.log('Server started on http://localhost:8000'));
// const express = 
// require ('express');
// const path = require ('path');
// const app = express ();
// app.set ('viaws',
//     path.join(__dirname,'views'));
//     app.set('view engine',)
// )