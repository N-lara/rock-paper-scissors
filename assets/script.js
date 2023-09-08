var playbtn = document.querySelector("#play");
var wins = document.getElementById("wins").innerText;
var losses = document.getElementById("losses").innerText;
var ties = document.getElementById("ties").innerText;
var w = 0;
var l = 0;
var t = 0; 

function question() {
    var x = 0;
    do {
      ans = prompt("rock paper or scissors.", "r, p, or s.");
      if (ans == "r") {
        x = 1;
      } else if (ans == "p") {
        x = 2;
      } else if(ans == "s") {
        x = 3;
      }else{alert("please type r, p, or s")}
    } while (x == 0);
    return x;
}

function computer(){
    x = Math.floor(Math.random() * 4 + 1);
    return x;
}

function win(player, comp){
    var winner = 0
    if(comp == player){
        alert("its a tie!");
        winner = 0;
    }else if(player == 1){
        if(comp == 2){
            alert("computer wins!");
            winner = 2;
        }else if(comp == 3){
            alert("player wins");
            winner =1;
        }
    }
    else if(player == 2){
        if(comp == 3){
            alert("computer wins!");
            winner = 2;
        }
        else if(comp == 1){
            alert("player wins");
            winner = 1;
    }
    }else if(player == 3){
        if(comp == 1){
            alert("computer wins!");
            winner = 2;
        }
        else if(comp == 3){
            alert("player wins");
            winner = 1;
    }
    }
    return winner;
};

function counter(win){
    if(win == 0){
        t++;
        console.log(t);
        document.getElementById("ties").innerText = "Total ties: " +  t;
    }else if(win == 1){
        w++;
        console.log(w);
        document.getElementById("wins").innerText = "Total wins: " +  w;
    }else if(win == 2){
        l++
        console.log(l);
        document.getElementById("losses").innerText = "Total losses: " + l;
    }
}

function rps(){
  var player = question();
  var comp = computer();
  var winner = win(player, comp);
  counter(winner);
  console.log(player);
  console.log(comp);
  console.log(winner);
}

playbtn.addEventListener("click",rps)
