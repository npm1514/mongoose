var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ingredientCtrl = require('./controllers/ingredientCtrl');

var app = express();
app.use(bodyParser.json());

var mongoUri = "mongodb://localhost:27017/tacos";
mongoose.connect(mongoUri);

mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});


app.post('/api/ingredient', ingredientCtrl.create);
app.get('/api/ingredient',ingredientCtrl.read);
//
// app.get('/products', function(req, res, next){
//   db.products.find({}, function(err, result){
//     res.send(result);
//   });
// });
//
// app.get('/products/:id', function(req, res, next){
//   var idToFind = ObjectId(req.params.id);
//   db.products.find({_id:idToFind}, function(err, result){
//     res.send(result);
//   });
// });
//
// app.delete('/products/:id', function(req, res, next){
//   var idToDelete = ObjectId(req.params.id);
//   db.products.remove({_id:idToDelete}, function(err, result){
//     if (err) {
//       res.status(500).send("Failed to delete");
//     }
//     res.send("Successfully deleted");
//   });
// });
//
// app.put('/products/:id', function(req, res, next){
//   var idToModify = ObjectId(req.params.id);
//   var updateObject = {
//     query: {_id: idToModify},
//     update: {$set: req.body},
//     new: false
//   };
//   db.products.findAndModify(updateObject, function(err, result){
//     console.log('query completed');
//     res.send(result);
//   });
// });



var nodePort = 8000;
app.listen(nodePort, function(){
  console.log("listening to " + nodePort);
});
