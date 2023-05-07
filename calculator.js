
const express=require("express");
const bodyParser=require("body-parser")

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

 app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html");
 });
 app.post("/", function (req,res){

   // console.log(req.body);
   // res.send("thanks for posting")

   var num1=Number(req.body.num1);
   var num2=Number(req.body.num2);
   var result=num1+num2;
   res.send("The sum is "+result);

 })
 app.listen(3000,function(){
   console.log("server started at 3000");
 });
