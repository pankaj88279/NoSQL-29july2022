console.log('its working')


//const(samthing) require(samelibrary)
const express =require('express');

const app =express();
const  mongoose = require('mongoose');

require ('dotenv').config();

//function defination
async function Player(){

    return await mongoose .connect('mongodb+srv://pankaj:pankaj1993@cluster0.4gb2s.mongodb.net/?retryWrites=true&w=majority')

    
}
// 2. function calling
 Player().then(()=>{ 
console.log('conected mogodb')

 }).catch((err)=>{ 
    console.log('error',err)
 })
  
 


const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`this port running in port ${PORT}`)
})