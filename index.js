require('dotenv').config();
const express = require("express");
const moment = require('moment');
const app = express();
const createContract = require('./contracts')
app.use(express.json());
const { PORT } = process.env;


// THIS IS A TEMPORARY DATABASE
const disasters = [];
let id = 0

app.get('/disasters', (req, res) => {
    // TODO: make  api call to waterfall to get data and respond with diassters
    res.send(disasters);
})

app.post('/disasters', (req, res) => {
    const { description, xcoordinate, ycoordinate, emergencyStatus, dateTime } = req.body;
    
    const disaster = { id, description, xcoordinate, ycoordinate, emergencyStatus, dateTime };
    disasters.push(disaster);
    id++

    const contract = createContract(disaster);
    // TODO: make api call to waterfall to store contracts
    res.send('contract created in local data store')
})

app.listen(PORT, () => console.info(`Disaster Reporter API Listening on PORT: ${PORT}`))
