const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  
    const contentType = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
    };

  
  const ext = path.extname(req.url);
  res.setHeader('Content-Type', contentType[ext] || 'text/html');

  if (req.url === '/') {
    fs.readFile('./public/index.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  } else {
    
    const filePath = `./public${req.url}`;
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
