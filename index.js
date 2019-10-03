const http = require('http');
const url = require('url'); 
const fs = require('fs'); 

http.createServer(function(req, res){
    let q = url.parse(req.url, true);
    let filename = `.${q.pathname}`; 

    if (q.pathname == '/'){
        filename= './index.html'; 
    }

   if (!fs.existsSync(filename)) {
       filename = '404.html'
   }
    fs.readFile(filename, function(err, data){
        if (err) {
            console.log('error'); 
            res.end(); 
        }
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write(data); 
        res.end(); 
    });

}).listen(8080); 
