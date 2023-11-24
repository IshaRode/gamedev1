document.addEventListener('DOMContentLoaded', () => {
    const playerForm = document.getElementById('playerForm');
  
    playerForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const player1Name = document.getElementById('player1').value;
      const player2Name = document.getElementById('player2').value;
  
      
      displayThankYouMessage();
      changeHeaderText();
    });
  });
  
  function displayThankYouMessage() {
    const formContainer = document.querySelector('.form');
    formContainer.innerHTML = "<p class='thanks' >You can start the game now!</p>";
  }
  
  function changeHeaderText() {
    const headerText = document.querySelector('.name');
    headerText.textContent = 'Great!!!';
  }









// Get the form element
const playerForm = document.getElementById('playerForm');

// Event listener for form submission
playerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the player names from the input fields
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;

    // Store player names in local storage
    localStorage.setItem('player1', player1Name);
    localStorage.setItem('player2', player2Name);

    // You can add a message or perform other actions if needed after saving names
   

    // Alternatively, if there's a separate "Start Game" button, show it after saving names
    document.getElementById('startGameBtn').style.display = 'inline-block';
});

// Function to start the game (optional, example function)
function startGame() {
    // Perform actions to start the game after saving names
    // For example, navigate to game.html or initialize game logic
    console.log('Game is starting...');
}

