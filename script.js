
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
Check to see if anyone has a score of 5 yet
*/
function checkWinner(){ // #################### change to return winner
    console.log("in the check winner function");
    if(userScore == 5){
        return "You";
    }else if(computerScore ==5){
        return "Computer";
    }else{
        return "no";
    }
}



/*
Play a round of the Rock, Paper, Scissors Game
Update the score accordingly (Paper beats Rock, Rock beats Scissors, Scissors beat Paper)
*/
function playRound (playerSelection){

    let computerSelection = computerPlay();
    addImageComp(computerSelection);

    let theResultText = document.getElementById("whoWon");
    
    // find out the winner and update the score
    switch(playerSelection){
        
        case "Rock":
            if (computerSelection=="Rock"){
                theResultText.innerHTML = "Computer also chose Rock.  It's a draw. NEXT ROUND!";
                console.log("We chose the same! NEXT ROUND!");
            }else if(computerSelection=="Paper"){
                theResultText.innerHTML = "Computer chose Paper.  Paper beats Rock. Computer Wins! NEXT ROUND!";
                console.log("The computer wins! NEXT ROUND!");
                computerScore++;
            }else if(computerSelection=="Scissors"){
                theResultText.innerHTML = "Computer chose Scissors.  Rock beats Scissors. You Win! NEXT ROUND!";
                console.log("You win! NEXT ROUND!");
                userScore++;
            }else{
                console.log("Hmmm... Something went wrong...");
            }
            break;
        case "Paper":
            if (computerSelection=="Paper"){
                theResultText.innerHTML = "Computer also chose Paper.  It's a draw. NEXT ROUND!";
                console.log("We chose the same! NEXT ROUND!");
            }else if(computerSelection=="Scissors"){
                theResultText.innerHTML = "Computer chose Scissors.  Scissors beats Paper. Computer Wins! NEXT ROUND!";
                console.log("The computer wins! NEXT ROUND!");
                computerScore++;
            }else if(computerSelection=="Rock"){
                theResultText.innerHTML = "Computer chose Rock.  Paper beats Rock. You Win! NEXT ROUND!";
                console.log("You win! NEXT ROUND!");
                userScore++;
            }else{
                console.log("Hmmm... Something went wrong...");
            }
            break;
        case "Scissors":
            if (computerSelection=="Scissors"){
                theResultText.innerHTML = "Computer also chose Scissors.  It's a draw. NEXT ROUND!";
                console.log("We chose the same! NEXT ROUND!");
            }else if(computerSelection=="Rock"){
                theResultText.innerHTML = "Computer chose Rock.  Rock beats Scissors. Computer Wins! NEXT ROUND!";
                console.log("The computer wins! NEXT ROUND!");
                computerScore++;
            }else if(computerSelection=="Paper"){
                theResultText.innerHTML = "Computer chose Paper.  Scissors beats Paper. You Win! NEXT ROUND!";
                console.log("You win! NEXT ROUND!");
                userScore++;
            }else{
                console.log("Hmmm... Something went wrong...");
            }
            break;

    }

    console.log("user score: " + userScore);
    let userScoreElement = document.getElementById("playerScore");
    userScoreElement.innerText = userScore;
    console.log("computer score: " + computerScore);
    let computerScoreElement = document.getElementById("computerScore");
    computerScoreElement.innerText = computerScore;

    /* Check to see if anyone has won the game */
        let hasAnyoneWon = checkWinner();
        console.log(hasAnyoneWon);
        if(hasAnyoneWon!="no"){
            setTimeout(function() { 
                let alertConfirm = confirm("Game Over. " + hasAnyoneWon + " won! Click OK to play again"); 
                if(alertConfirm){
                    resetScores();
                }
        }, 10); 
        
            
        }
}

function resetScores(){
    // set scores to 0
    
    userScore = 0;
    computerScore = 0;
    // reload html
    let userScoreElement = document.getElementById("playerScore");
    userScoreElement.innerText = userScore;
    console.log("computer score: " + computerScore);
    let computerScoreElement = document.getElementById("computerScore");
    computerScoreElement.innerText = computerScore;

    // remove selected images
    let imageSpaceP = document.getElementById("playerSelectionImage");
    imageSpaceP.innerHTML = "";
    let imageSpaceC = document.getElementById("computerSelectionImage");
    imageSpaceC.innerHTML = "";

    
}

/*
Let's start the game!
*/
function game(){
   

            console.log("in the game function");
            const playerButtons = document.getElementsByClassName("playerButton");
            console.log(playerButtons);
            console.log(playerButtons.length);
            for (let i=0; i<playerButtons.length; i++) {
                console.log("in the for function");
                playerButtons[i].addEventListener('click', function(){
                    console.log(this.id);
                    // add the image to the score board
                    addImage(this.id);
                    playRound (this.id);
                    
                
                }) ; 
            }     
        
}

function addImage(imageName){
    imageName = imageName.toLowerCase() + "hover";
    let imageSpace = document.getElementById("playerSelectionImage");
    imageSpace.innerHTML = "";
    // create the element
    var elem = document.createElement("img");
    elem.src = 'images/'+imageName+'.png';
    elem.classList.add("selectionImage");
    console.log("imagespace:" + imageSpace);
    imageSpace.appendChild(elem);
}

function addImageComp(imageName){
    imageName = imageName.toLowerCase() + "hover";
    let imageSpace = document.getElementById("computerSelectionImage");
    imageSpace.innerHTML = "";
    // create the element
    var elem = document.createElement("img");
    elem.src = 'images/'+imageName+'.png';
    elem.classList.add("selectionImage");
    console.log("imagespace:" + imageSpace);
    imageSpace.appendChild(elem);
}
        

 // set global score variables
 let userScore = 0;
 let computerScore = 0;
game();