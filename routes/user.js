//express を呼び出す
const express = require('express');
//expressでルーティングの設計をするためにrouter関数を用意する
const router = express.Router();

router.get('/', (req, res) => {
  res.send('ユーザーです');
});

router.get('/info', (req, res) => {
  res.send('ユーザー情報です');
});
//ルーターの情報をserver.jsにインポートする
module.exports = router;
