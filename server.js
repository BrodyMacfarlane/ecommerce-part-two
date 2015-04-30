var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 9001;
var mongoUri = 'localhost:27017/ecommerce';

var productCtrl = require('./product-controller.js');


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(mongoUri,function(err){
	if (err) {
		console.log(err)
		return;
	}
	console.log('Connected to Mongo at: ', mongoUri);
	app.listen(port, function(){
		console.log('Now listening on port: ' + port);
	});
})

app.get('/api/products', function(req, res){
	var query = {};
	if(req.query.id) {
		query._id = mongo.ObjectId(req.query.id);
	}
	if(req.query.title){
		query.title = req.query.title;
	}
	
	
	/*
	db.products.find(query, function(err, response){
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
`*/

});

app.post('/api/products', function(req, res){
	
	/*
	db.products.save(req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
	*/

});

app.put('/api/products', function(req, res){
	if(!req.query.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongo.ObjectId(req.query.id)
	};
	
	/*
	db.products.update(query, req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
	*/

});

app.delete('/api/products', function(req, res){
	if(!req.query.id){
		return res.status(400).send('id query needed');
	};
	var query = {
		_id: mongo.ObjectId(req.query.id)
	};

	/*
	db.products.remove(query, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
	*/
});
