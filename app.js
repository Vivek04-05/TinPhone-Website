const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+'/public/Login.html');
});

app.post("/",function(req,res){
    var email=req.body.email;
    var pass=req.body.pass;
    // res.send("email is "+email+" passward is "+pass);
    if(email == "abc123@gmail.com" && pass=="123456"){
        res.sendFile(__dirname+'/public/main.html');
    }
    else{
        res.send("Enter valid email id and passward");
    }
});

app.get("/contact",function(req,res){
    res.sendFile(__dirname+'/public/contact.html');
});

app.post("/contact",function(req,res){
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;
    var message=req.body.message;
    var additional=req.body.additional;

    
    res.sendFile(__dirname+'/public/main.html');
});

app.get("/main",function(req,res){
    res.sendFile(__dirname+'/public/main.html');
});



app.listen(3000,function(){
    console.log("it work properly");
});