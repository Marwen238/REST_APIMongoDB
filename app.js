var express = require('express');
var bodyparser = require('body-parser');


var mongojs = require('mongojs');
var db = mongojs('TestDB',['products'])




var app = express();

app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//Home
app.get('/', function(req, res, next){
    res.send('hello world');
})

//Fetch All Product
app.get('/api/products', function(req, res, next){
    db.products.find(function(err, docs){
        if(err){
            res.send(err)
        }else{
            console.log('Products Found...');
            res.json(docs);
        }
    })
})



//Fetch Single Product
app.get('/api/products/single/:id', function(req, res, next){

    db.products.findOne({_id:mongojs.ObjectID(req.params.id)},function(err, docs){
        res.json(docs)
    })
})





//Add Product
app.post('/api/products/', function(req, res, next){
   db.products.insert(req.body,function(err, docs){
       if(err){
           console.log(err);

       }else{
           console.log('Adding Sucessful');
           res.json(docs);
       }
   })
})





//Update Product
app.put('/api/products/:id', function(req, res, next){
    db.products.findAndModify({query:{_id:mongojs.ObjectID(req.params.id)},update:{
        $set:{
            firstname:req.body.firstname,
            categorie:req.body.categorie,
            model:req.body.model,
            price:req.body.price,
            image:req.body.image,
            details:req.body.details
        }
        },
    new:true
    } , function(err, docs){
        if(err){
            res.send(err)
        }else{
            console.log('Update Product ...');
            res.json(docs)
        }
    })
})








//Delete Product
app.delete('/api/products/remove/:id', function(req, res, next){
    /*res.send('delete products wher id = '+req.params.id);*/
    db.products.remove({_id:mongojs.ObjectID(req.params.id)},function(err, docs){
        if(err){
            res.send(err)
        }else{
            console.log('Delete Product...');
            res.json(docs)
        }
    })
})






app.listen(3000, function(err){
    if(err){
        console.log(err)
    }else{
        console.log('listen on 3000 ...')
    }
})