const express = require('express');
const path = require('path');

const app = express();
const projectRoot = path.join(__dirname, '..');

app.use(express.static(path.join(projectRoot, 'dist')));
app.use('/rom', express.static(path.join(projectRoot, 'rom')));

app.get('*', (req, res) => {
  res.sendFile(path.join(projectRoot, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
