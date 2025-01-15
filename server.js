// Express.js palvelin
const path = require('path')
const express = require('express')

const port = 3001;

const app = express();

const herkut = require('./herkut.json')


app.get('/api/herkut',(req, res) => {
    res.json(herkut);
    })

const polku = path.join(__dirname, './public')

app.use(express.static(polku))

app.listen(port,()=>{
    console.log('Server is up on port: ' + port);
})