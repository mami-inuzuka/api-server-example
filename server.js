const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

let data = {
  id: 1,
  title: "Sample Todo",
  completed: false,
  timestamp: new Date().toISOString()
};

// エンドポイントの設定
app.get('/todos/1', (req, res) => {
  console.log('GET /todos/1');
  res.set({ 'Cache-Control': 'max-age=10' });
  res.json(data);
});

// サーバーの起動
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
