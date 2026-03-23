const https = require('https');
const fs = require('fs');
const path = require('path');

const cert = fs.readFileSync('/tmp/ssl/cert.pem');
const key = fs.readFileSync('/tmp/ssl/key.pem');

const mimeTypes = {
  '.html': 'text/html',
  '.json': 'application/json',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = https.createServer({ cert, key }, (req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(__dirname, filePath);
  
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(8443, () => {
  console.log('HTTPS server running on https://localhost:8443');
});
