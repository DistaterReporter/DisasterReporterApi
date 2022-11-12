require('dotenv').config();
const express = require("express");
const moment = require('moment');
const app = express();
app.use(express.json());
const { PORT } = process.env;

app.get('/disasters', (req, res) => {
    // TODO: make  api call to waterfall to get data and respond with diassters
    res.send([{ 
        id: 1, 
        description: 'This is a test desription', 
        coordinates: {
            x: 11111,
            y: 111111
        },
        emergencyStatus: 1,
        dateTime: moment.utc('11/18/2022') 
    }])
})

app.post('disasters', (req, res) => {
    const contract = createContract(req.body);
    // TODO: make api call to waterfall to store contracts
    res.send('FAKE RESPONSE: contract created')
})

app.listen(PORT, () => console.info(`Disaster Reporter API Listening on PORT: ${PORT}`))
