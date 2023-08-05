const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const server = express();

const loginRequestHandler = function (req, res){
    // let body = "";
    // req.on("data",chunk =>{
    //     body += chunk;
    // });
    // req.on("end", function(){
    //     console.log(body);
    // })

    console.log(req.body)
    res.send ("Done")
}

server.use(express.static(path.join(__dirname,"public")));
server.use(bodyParser.urlencoded({extended:false}))


server.post('/login', loginRequestHandler)

server.listen(5002,function(){console.log('idey listen boss')});