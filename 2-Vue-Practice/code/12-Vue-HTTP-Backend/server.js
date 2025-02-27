const express = require('express');
const cors = require('cors')

const Rating = require('./model/Rating');

const DB = require('./util/DB-Setting');
const Testrouter = require('./router/TestRouter');

const app = express();

app.use(cors())
app.use(express.json())

app.use('/', Testrouter);

DB.sync().then(()=>{
    app.listen(8080, ()=>{
        console.log('NodeJS Server Running')
    })
})


