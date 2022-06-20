
/*
Assign a random game item to the computer
return this item
*/
function computerPlay(){
    const gameItems = ["Rock", "Paper", "Scissors"];
    // get a random number between 0 and 2 in order to get a random array position and there a random game item
    let gamePosition = getRandomInt(3);
    let gameItem = gameItems[gamePosition];
    console.log("The Computer has chosen " + gameItem);
    return gameItem;
}


/*
Get a random interger and send in a maximum number parameter
return the random number
*/
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}


/*
Play a round of the Rock, Paper, Scissors Game
Update the score accordingly (Paper beats Rock, Rock beats Scissors, Scissors beat Paper)
*/
function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    // find out the winner and update the score
    switch(playerSelection){
        
        case "ROCK":
            if (computerSelection=="ROCK"){
                console.log("We chose the same! NEXT ROUND!");
            }else if(computerSelection=="PAPER"){
                console.log("The computer wins! NEXT ROUND!");
                computerScore++;
            }else if(computerSelection=="SCISSORS"){
                console.log("You win! NEXT ROUND!");
                userScore++;
            }else{
                console.log("Hmmm... Something went wrong...");
            }
            break;
        case "PAPER":
            if (computerSelection=="PAPER"){
                console.log("We chose the same! NEXT ROUND!");
            }else if(computerSelection=="SCISSORS"){
                console.log("The computer wins! NEXT ROUND!");
                computerScore++;
            }else if(computerSelection=="ROCK"){
                console.log("You win! NEXT ROUND!");
                userScore++;
            }else{
                console.log("Hmmm... Something went wrong...");
            }
            break;
        case "SCISSORS":
            if (computerSelection=="SCISSORS"){
                console.log("We chose the same! NEXT ROUND!");
            }else if(computerSelection=="ROCK"){
                console.log("The computer wins! NEXT ROUND!");
                computerScore++;
            }else if(computerSelection=="PAPER"){
                console.log("You win! NEXT ROUND!");
                userScore++;
            }else{
                console.log("Hmmm... Something went wrong...");
            }
            break;

    }
}

/*
Let's start the game!
*/
function game(){
   
    // loop 5 times (the number of times we play the game)
    for(let i=0; i<5; i++){
        // get the user input
        let userInput = prompt("What's your choice? Rock, Paper or Scissors?");
        // get the computer's choice
        let computerInput = computerPlay();
        // display the choices before calculating the winner
        console.log("Player chose: " + userInput + " Computer chose: " + computerInput);
        playRound (userInput, computerInput);
    }
    console.log("The results are in...");
    console.log("Player score: " + userScore + " Computer Score: " + computerScore);
    if(userScore>computerScore){
        console.log("The player wins! Well done");
    }else if(computerScore>userScore){
        console.log("The computer wins! Better luck next time");
    }else{
        console.log("Hmm... any error!");
    }

    
}

 // set global score variables
 let userScore = 0;
 let computerScore = 0;
game();