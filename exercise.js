var fs=require('fs');
var http=require('http');

var server=http.createServer((req,res)=>{

var file=fs.createReadStream('index.html');
file.pipe(res);
});

server.on("connection",(socket)=>{
    console.log("server connected");
});
server.listen(3000);
console.log("server working");