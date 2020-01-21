const express=require("express");
const bodyParser=require("body-parser");
const payRouter=require("./router/pay.js");
var server=express();
server.listen(3000);
server.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	next();
});
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use("/pay",payRouter);