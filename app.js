const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');

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
    
    var flag = []
    var flagval = req.body.flag_no
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
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening at Port ${port}`));