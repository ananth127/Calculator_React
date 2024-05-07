const express =require('express');
const app=express();
app.get('/' , (req,res) =>{
    res.status(200).send("Landing Page");
});
app.get("/about" , (req,res)=>{
    res.status(200).send("Aboout Page");
});
const port=4000;
app.listen(port,()=>{{
    console.log(`site is runnening at port http://127.0.0.1:${port}`);
}});