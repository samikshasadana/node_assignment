var http=require('http');

var server=http.createServer((req,res)=>{

var about={
    Name:"Samiksha",
    Work:"learning mern-stack",
    Age:"21"
};
res.end(JSON.stringify(about));

});

server.on("connection",(socket)=>{
    console.log("server connected");
});
server.listen(3000);
console.log("server working!");