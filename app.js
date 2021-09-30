const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const board_router = require('./routers/board');
const rootRouter = require('./routers/rootrouter')
const port = 5000;

app.use(session({
    secret: 'suaw3211',
    resave: true,
    saveUnintialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rootRouter);
app.use('/shop', require('./routers/shop.js'));
app.use('/board', board_router);

app.set('view engine', 'ejs');

var db;

MongoClient.connect(`${process.env.DB_URL}`, { useUnifiedTopology: true }, (err, client) => {
    if(err) throw err;

    db = client.db('GGouiGGoui');
    db.collection('post').insertOne({이름 : "강주현"}, (err, result) => {
        console.log('저장완료');
    })
})


app.listen(port, () => {
    console.log('서버 대기 중 3000번 할래');
})