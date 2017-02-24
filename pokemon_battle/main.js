var game = {
  players: [],
  addPlayer: function(name){
      playerConstructor(name);
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
  player.card = null;
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

$(document).ready(function(){
    $("button").click(function(){
        var rand = Math.floor(Math.random()*150+1)
        $.ajax({method: "GET", url: "http://api.espn.com/v1/sports/baseball/mlb/athletes/"+ rand, success: function(data){
            console.log(data);
        }})
    })
})
