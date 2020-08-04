const express = require('express');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;
app.use(express.static(__dirname + '/public'));
app.use('/users', users);
app.use('/cards', cards);
app.listen(PORT, () => {
  console.log(`Сервер запущен, порт: ${PORT}.`);
});
