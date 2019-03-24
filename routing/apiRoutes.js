// I had the wrong path to friends.js. Forutnately, throw err helped point that out faster; WAY easier than a misspelling!
var friends = require("../app/data/friends");

module.exports = function(app) {
    // Return all friends found as JSON 
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var user = req.body;

        // Scores
        for(var i = 0; i < user.scores.lenght; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        } 
    
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // Arithmatic for friend score
    for(var i = 0; i < friends.lenght; i++) {
        var totalDifference = 0;
        for(var j = 0; j < friends[i].scores.lenght; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDifference +=difference;
        }

        // Changes the new min
        if(toalDifference < minimumDifference) {
            gamerFriendIndex = i;
            minimumDifference = totalDifference;
        }
    }

        friends.push(user);

        res.json(friends[gamerFriendIndex]); 
        });
};