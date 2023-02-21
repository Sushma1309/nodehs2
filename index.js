const express=require('express')
const app=express();
const fs=require('fs'); // file system module which is used to do changes with files
const path=require('path');
const port=3000;

app.get('/',(req,res)=>{
    res.send("I am on home page.");
    res.end();
})

app.get('/gallery',(req,res)=>{
    res.send("I am on gallery page");
    res.end();
})

// app.get('/submit',(req,res)=>{
//    console.log("get of submit");
// })

app.post("/submit",(req,res)=>{
    res.send("post worked");
    res.end();
})

app.listen(port,()=>{
    console.log("Server is running");
})

//embeded JS it is HTML+JS