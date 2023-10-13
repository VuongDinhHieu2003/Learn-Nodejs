const express = require('express');
const bodyParser = require('body-parser');
//const chalk = require('chalk');
const indexController = require('./controllers/indexController');
const studentController = require('./controllers/studentController');
const messageController = require('./controllers/messageController');

const app = express();
const port = 5000;

// Middleware để ghi log cho mọi yêu cầu
// Bản không màu
app.use((req, res, next) => {
  console.log(`URL: ${req.url}`);
  console.log(`Method: ${req.method}`);
  next(); // Tiếp tục xử lý các middleware và tác vụ tiếp theo
});

// Bản có màu
// Middleware để ghi log cho mọi yêu cầu với màu sắc tương ứng với phương thức
// app.use((req, res, next) => {
//   let methodColor = '';
//   let urlColor = chalk.blue(req.url);
//   if (req.method === 'GET') {
//     methodColor = chalk.green(req.method); // Màu xanh cho GET
//   } else if (req.method === 'POST') {
//     methodColor = chalk.yellow(req.method); // Màu vàng cho POST
//   } else {
//     methodColor = req.method; // Giữ màu mặc định cho các phương thức khác
//   }
//   console.log(`URL: ${urlColor}`);
//   console.log(`Method: ${methodColor}`);
//   console.log(`------------------------`);
//   next();
// });

app.use(bodyParser.json());

app.get('/', indexController.getIndex);

app.get('/message/', messageController.getMessage);
app.get('/message/:id', messageController.getMessage);

app.get('/:mssv/:id', studentController.getStudent);
app.post('/:mssv/:id', studentController.postStudent);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
