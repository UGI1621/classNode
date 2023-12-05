const express = require('express');
const app = express()

app.listen(8080,function(){
    console.log('8080 is waiting...')
})

app.get('/book' , function(req,res){
    res.send('books page')
})