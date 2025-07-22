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


    let choice = function getHumanChoice() {
        let choice = prompt("Please enter your choice :");
        return choice;
    }

    let humanScore = 0;
    let computerScore = 0;


    function playRound(choice, computerChoice) {

        choice = choice.toLowerCase();

        if (choice == "rock" && computerChoice == "Rock" || choice == "paper" && computerChoice == "Paper" || choice == "scissors" && computerChoice == "Scissors") {
            console.log("it is a tie !");
        } 
        else if (choice == "rock") {
            if (computerChoice == "Paper") {    

                computerScore++;
                console.log("You lost !");

            } else if (computerChoice == "Scissors") {
                
                humanScore++;
                console.log("You Won !");
            }

        } else if (choice == "paper") {
            if (computerChoice == "Rock") {

                console.log("You won !");
                humanScore++;

            } else if (computerChoice == "Scissors") {

                console.log("You lost !");
                computerScore++;
            }
        } else if (choice == "scissors") {
            if (computerChoice == "Rock") {

                console.log("You lost !");
                computerScore++;

            } else if (computerChoice == "Paper") {

                console.log("You won !");
                humanScore++;
            }
        } 

        console.log(`Computer picked : ${computerChoice}`);
        console.log( `You picked : ${choice}`);

        console.log(`Computer score : ${computerScore}`);
        console.log( `Your score : ${humanScore}`);

    }



    for (i = 0; i < 5; i++) {
        playRound(choice(), computerChoice(), humanScore, computerScore);
    }

}


playGame();




