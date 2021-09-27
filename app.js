const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var db;

MongoClient.connect(`${process.env.DB_URL}`, { useUnifiedTopology: true }, (err, client) => {
    if(err) throw err;

    db = client.db('GGouiGGoui');
    db.collection('post').insertOne({이름 : "강주현"}, (err, result) => {
        console.log('저장완료');
    })
})

app.get('/', (req, res) => {
    const data = {
        "works": [
            {
                    "img": "https://asdadsads.s3.ap-northeast-2.amazonaws.com/1.jpg",
                    "name": "이름",
                    "author": "작가",
                    "like": 123
            },
            {

                    "img": "https://asdadsads.s3.ap-northeast-2.amazonaws.com/1.jpg",
                    "name": "이름",
                    "author": "작가",
                    "like": 123
            }
        ]
    }
    console.log(data);
    res.header("Access-Control-Allow-Origin", "*"); // 리액트 해야됨
    res.send(data);
})

app.get('/add', (req, res) => {
    res.send('응답 완료');
    db.collection('post').insertOne({날짜 : '2021-09-27', 이름 : '전승원'}, (err, results) => {
        console.log('저장완료됨')
    })
})


app.listen(port, () => {
    console.log('서버 대기 중 3000번 할래');
})