// const express = require('express');

// const app = express();

// app.use("/", express.static(__dirname + '/dist'));

// app.use("/rom", express.static(__dirname + '/rom'));

// app.listen(3000, () => console.log('Server has started on port 3000'));

const express = require('express');
const path = require('path');

const app = express();

// Path to the project root
const projectRoot = path.join(__dirname, '..');

// Serve static files from the 'dist' directory at the root level
app.use(express.static(path.join(projectRoot, 'dist')));

// Serve ROM files from the 'rom' directory at the root level
app.use('/rom', express.static(path.join(projectRoot, 'rom')));

// Fallback route for any unmatched paths, serving 'dist/index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(projectRoot, 'dist', 'index.html'));
});

// Use a dynamic port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
