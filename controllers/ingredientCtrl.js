var ingredientModel = require('./../models/ingredientModel');

module.exports = {
  create: function(req, res) {
    console.log("it works");
    var ingredient = new ingredientModel(req.body);
    ingredient.save(function(err, result){
      res.send(result);
    });
  },
  read: function(req, res) {
    ingredientModel.find({}, function (err, result) {
      res.send(result);
    });
  }
};
