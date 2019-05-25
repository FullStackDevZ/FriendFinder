
var path = require('path');
var friends = require("../data/friends.js");


module.exports = function (app) {


  app.post("/api/friends", function (req, res) {

    var userInput = req.body;
    var userResponse = userInput.scores;
    var match = {
      name: "",
      photo: "",
      difference: 500
    };

    for (var i = 0; i < friends.length; i++) {
      var difference = 0;
      for (var j = 0; j < userResponse.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userResponse[j]);

        if (difference <= match.difference) {
          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.difference = difference;
        }
      }
    }

    friends.push(userInput);

    res.json(match);

  });
};

