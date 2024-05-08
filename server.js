const express = require('express');

const app = express();

app.use("/", express.static(__dirname + '/dist'));

app.use("/rom", express.static(__dirname + '/rom'));

app.listen(3000, () => console.log('Server has started on port 3000'));
