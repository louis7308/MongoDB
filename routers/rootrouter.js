"use strict"

const router = require('express').Router();
const express = require('express')
const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/images')
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname)
    }
});
const upload = multer({storage : storage})
app.use(express.static(__dirname + '/view'));

app.set('view engine', 'ejs');

router.get('/', (req, res) => {
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

router.post('/add', (req, res) => {
    res.send('응답 완료');
    db.collection('post').insertOne({날짜 : '2021-09-27', 이름 : '전승원'}, (err, results) => {
        console.log('저장완료됨')
    })
})

router.get('/list', (req, res) => {
    console.log(db.collection('post').find().toArray());

    res.render('index.ejs');
})

router.get('/upload', (req, res) => {
    res.render('login.ejs');
})
router.post('/upload', upload.single('프로필사진'), (req, res) => {
    console.log(req);
    res.send('업로드 완료');
})

module.exports = router;