import express from 'express'

const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
    return res.json({msg:"Hii burhan"})
})

app.listen(PORT,()=>{
    console.log('working.....');
    
})