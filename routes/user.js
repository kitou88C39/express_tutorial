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
//ランダムの文字列をエンドポイントに設定する
router.get('/:id', (req, res) => {
  res.send(`${req.params.id}のユーザー情報を取得しました`);
});

//ルーターの情報をserver.jsにインポートする
module.exports = router;
