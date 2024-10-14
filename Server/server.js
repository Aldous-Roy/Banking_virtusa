const express = require('express');
const app=express();
const PORT = process.env.PORT || 8000;
const bodyParser=require('body-parser');

app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})