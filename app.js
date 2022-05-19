const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

const val = ["C187F9B79CFDBB26", "4F70FA69920BC263", "A4B7D507A87A8827", "27D364446E5C0B93", "9C841CB9FD1196C1", "4D15FE061DC07C69", "E99894D28BFA7451", "6B076C902B963E02", "E91B6626F9067149", "A909C9717B0F93B2", "849C4980AD7797E5", "C9B8DB6423EA379E", "D023249C48F8C003", "2557F969BDB885E6", "A167F24F815F1DAC", "737AF897DD733AA4", "1BA7CEA44AECDA56", "C07F0B5981AC601C", "61B271F895334003", "BD40AF5E53051229", "0E476D38328C1501", "C04B4DCF54EF2B25", "C59F549F8E52022F", "E5F4F132F0955681", "B30000AB1B46EE6E"]

const handlebars = require('express-handlebars');
const fs = require('fs');

app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'hbs');
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index'
}));
app.use(express.static('public'));

const db = require(__dirname + "/connection")
const User = require(__dirname + "/userschema")

app.use(bodyParser.urlencoded({ extended: false }));

let currentDate = new Date();

app.get('/', (req, res) => {
    res.status(200).render('home.hbs')
});

app.get('/contest', (req, res) => {
    res.status(200).render('mainpage.hbs')
});

app.get('/error', (req, res) => {
    res.status(200).render('error.hbs')
});

app.post('/create/:uname', (req, res) => {
    const data = new User({
        "_id": req.params.uname,
        "flags": [],
        "timestamp": []
    })
    try {
        data.save()
    }
    catch (error) {
        console.log(error)
    }
});

app.post('/update', (req, res) => {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    var uname = req.body.email
    var flag_chk = req.body.flag

    var flag = []
    var flagval = req.body.flag_no
    if (flag_chk.includes(val[flagval - 1])) {
        flag.push(flagval)

    var timestamp = []
    timestamp.push(time)

    User.findById(uname, async (err, docs) => {
        if (docs != null) {
            if ((docs.flags).includes(flagval) == false) {
                for (let index = 0; index < (docs.flags).length; index++) {
                    flag.push(docs.flags[index])
                    timestamp.push(docs.timestamp[index])
                }
                await User.updateOne(
                    { _id: uname }, {
                    $set: { flags: flag, timestamp: timestamp }
                })
            }
        }
    })
    res.redirect('/contest')
    }
    else {
        res.redirect('/error')
    }
    
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening at Port ${port}`));