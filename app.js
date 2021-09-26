const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let db;

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(`${process.env.DB_URL}`, (err, client) => {
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
    // console.log('시발', JSON.parse(test));
    // console.log(JSON.parse(data))
    res.header("Access-Control-Allow-Origin", "*"); // 리액트 해야됨
    res.send(data);
})

app.post('/write', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const title = req.body.img;
    const content = req.body.author;
    const datas = [name, title, content];

    const sql = 'INSERT INTO board(name, title, content'
})


app.listen(port, () => {
    console.log('서버 대기 중 3000번 할래');
})