const express = require('express');
const port = process.env.PORT || 9900;
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname,'/public')))
/*app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/public/mobile_responsive/index.html'))
})*/
app.get('/vote',(req,res)=>{
    let database = [
        "dennis ogingo",
        "eric ngugi",
        "ryan kamau",
        "caroline wambui",
        "samuel mugenya",
        "samoina wangui",
        "jayden gathatwa",
        "patrick mbuguah",
        "nancy njeri"
    ]
    if(database.includes(req.query.fullname.toLowerCase())){
        res.sendFile(path.join(__dirname,'/public/login_page/login.html'))
    }else{
        res.send('You are not authorized to view this page')
    }
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})