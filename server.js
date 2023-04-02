//express を呼び出す
const express = require('express');
//インスタンス化をする
const app = express();
const useRouter = require('./routes/user');
//PORTを指定する
const PORT = 3000;
//getメソッド　ルートディレクトリを指定してページを表示する
app.get('/', (req, res) => {
  //console.log('hello express');
  //res.send('<h1>こんにちは</h1>');
  res.status(500).json({ msg: 'エラーです' });
});
//ルーティング
app.use('/user', useRouter);

//expressを使い、ローカルサーバーを立ち上げる
app.listen(PORT, () => console.log('サーバーが起動しました'));
