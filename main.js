const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    return res.json({message :"Hello , this is node js inside docker with ubuntu new version"});
});

app.listen(PORT,() => console.log(`Server is running on PORT : ${PORT}`));