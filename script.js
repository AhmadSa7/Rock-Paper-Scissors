function playGame() {

    let computerChoice =  function getComputerChoice() {

        let randomNum = Math.random();

        let computerChoice;

        if (randomNum <= 0.3) {
            computerChoice = "Rock";
        } else if (randomNum > 0.33 && randomNum <= 0.66) {
            computerChoice = "Paper";
        } else {
            computerChoice = "Scissors";
        }
        return computerChoice;
    }

    let humanScore = 0;
    let computerScore = 0;



    let choice = "";

    let rbtn = document.querySelector(".rock");
    let pbtn = document.querySelector(".paper");
    let sbtn = document.querySelector(".scissors");

    let result = document.querySelector(".result");
    let computerChoiceDiv = document.querySelector(".computerChoiceDiv");
    let humanChoice = document.querySelector(".humanChoice");
    let computerScoreDiv = document.querySelector(".computerScoreDiv");
    let humanScoreDiv = document.querySelector(".humanScoreDiv");


    let finalResult = document.querySelector(".finalResult");
    let finalScore = document.querySelector(".finalScore");
    let finalWinner = document.querySelector(".finalWinner");





    function playRound(choice, computerChoice) {

        if (choice == "rock" && computerChoice == "Rock" || choice == "paper" && computerChoice == "Paper" || choice == "scissors" && computerChoice == "Scissors") {
            result.textContent = "it is a tie !";
        } 
        else if (choice == "rock") {
            if (computerChoice == "Paper") {    

                computerScore++;
                result.textContent = "You lost !";

            } else if (computerChoice == "Scissors") {
                
                humanScore++;
                result.textContent = "You Won !";
            }

        } else if (choice == "paper") {
            if (computerChoice == "Rock") {

                result.textContent = "You won !";
                humanScore++;

            } else if (computerChoice == "Scissors") {

                result.textContent = "You lost !";
                computerScore++;
            }
        } else if (choice == "scissors") {
            if (computerChoice == "Rock") {

                result.textContent = "You lost !";
                computerScore++;

            } else if (computerChoice == "Paper") {

                result.textContent = "You won !";
                humanScore++;
            }
        } 

        computerChoiceDiv.textContent = `Computer picked : ${computerChoice}`;
        humanChoice.textContent = `You picked : ${choice}`;

        computerScoreDiv.textContent = `Computer score : ${computerScore}`;
        humanScoreDiv.textContent = `Your score : ${humanScore}`;
        
    }



        rbtn.addEventListener("click", () => {
            choice = "rock";
            playRound(choice, computerChoice(), humanScore, computerScore);
            if (humanScore == 5 || computerScore == 5) {
                detWinner(humanScore, computerScore);
                humanScore = 0;
                computerScore = 0;
            }
            
        });
        pbtn.addEventListener("click", () => {
            choice = "paper";
            playRound(choice, computerChoice(), humanScore, computerScore);
            if (humanScore == 5 || computerScore == 5) {
                detWinner(humanScore, computerScore);
                humanScore = 0;
                computerScore = 0;
            }     
              
        });
        sbtn.addEventListener("click", () => {
            choice = "scissors";
            playRound(choice, computerChoice(), humanScore, computerScore);
            if (humanScore == 5 || computerScore == 5) {
                detWinner(humanScore, computerScore);
                humanScore = 0;
                computerScore = 0;
            }
                 
        });


        

        
        
        function detWinner(humanScore, computerScore) {
            if (humanScore == computerScore) {

                finalResult.textContent = "FINAL SCORE : ";
                finalScore.textContent = `You  ${humanScore} : ${computerScore} Computer `;
                finalWinner.textContent = "IT'S A TIE !";
                

            } else if (humanScore > computerScore) {

                finalResult.textContent = "FINAL SCORE : ";
                finalScore.textContent = `You ${humanScore} : ${computerScore} Computer `;
                finalWinner.textContent = "YOU WON !";
                

            } else {

                finalResult.textContent = "FINAL SCORE : ";
                finalScore.textContent = `You  ${humanScore} : ${computerScore} Computer `;
                finalWinner.textContent = "YOU LOST !";
                
            }
            
        }


    

}


playGame();




