

function computerPlay(){
  return(["Rock", "Paper", "Scissors"][~~(Math.random()*3)]);
}
const vlas = {"Rock":0, "Paper":1, "Scissors":2};
function playRound(playerSelection, computerSelection){
  let v = (vlas[playerSelection] - vlas[computerSelection]+4)%3 -1
  return v;
}

function game() {
  console.log("It's a 3 out of 5 game");
  let scoore = [0,0], i =0;
  while(i<5&&Math.abs(scoore[0]-scoore[1])<3){
    let playerSelection = prompt("Choose Paper Rock or Scissors","Rock");
    const computerSelection = computerPlay();
    playerSelection =playerSelection.slice(0,1).toUpperCase() +playerSelection.slice(1).toLowerCase();
    const v = playRound(playerSelection, computerSelection);
    console.log(`You ${v>0?"Win":(v==0?"Tie":"Lose")}! ${v>0?playerSelection:computerSelection} ${v==0?"ties with":"beats"} ${v>0?computerSelection:playerSelection}`);
    scoore[0] += ~~((v+1)/2);
    scoore[1] += ~~((-v+1)/2);
    console.log(`Score: ${scoore[0]}:${scoore[1]}`);
    i++;
  }
  const v = scoore[0]-scoore[1];
  console.log(`Game Over, You ${v>0?"Win":(v==0?"Tie":"Lose")}!`);
}

game();

