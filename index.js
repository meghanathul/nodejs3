const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hii')
})

app.post("/user", (req,res)=>{
    console.log(req.query);  //
    res.send({name:'a',age:45})
})
//For put=update

app.put('/add/:id',(req,res)=>{   //for urlparams
    console.log(req.params);
    res.send("SUCCESS")
})
//2 way of sending
//query parameter: [multiple value]  name:'A'  age:89  (key value pare)
//url parameter:12 single value

app.listen(3000,()=>{
    console.log('server is running..........')
});

// /user?name='a'&age='34