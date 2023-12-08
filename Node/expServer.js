const express = require('express');
const app = express()
let id = 0;
let firstName = 'john';

app.listen(8080,function(){
    console.log('8080 is waiting...')
})

app.get('/book' , function(req,res){
    res.send('books page')
})

app.get('/checkname',function(req,res){
    query = req.query
    console.log(query)

    let result = '';
    if(id == query['id']){
        result = firstName
    }else{
        result = 'You are not ADMIN '
    }

    res.send(`${result}! you are ADMIN!`)
})

app.get('/checkid',function(req,res){
    query = req.query
    console.log(query)

    let result = ''
    if(id == query['id']){
        result = 'ADMIN mode'
    }else{
        result = 'none'
    }

    res.send(`checkid 페이지 입니다. ${result}`)
})

let user_id = 'ugi';
let user_pw = '1111';
let post_list = [1,2,3,4,5,6];

app.get('/my_post' , function(req,res){
    console.log(req.query)

    let result = post_list;

    if(user_id == req.query['user_id'] && user_pw == req.query['user_pw']){
        res.send(`here is your post!! ${result.filter((a) => a%2 == 0)}`)
    }else{
        res.send('wrong PW or wrong ID, check your account');
    }

})

app.get('/check_permission/:user_id/:user_pw',function(req,res){
    console.log(req.params)

    if(user_id == req.params['user_id'] && user_pw == req.params['user_pw']){
        res.send(`Hello! ${req.params['user_id']}!! you are Admin!!`)
    }else{
        res.send(`Sorry, you are not Admin...`)
    }
    
})