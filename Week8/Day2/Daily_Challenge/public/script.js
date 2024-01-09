async function fetchEmoji() {
    const response = await fetch('/game');
    const data = await response.json();
    document.getElementById('emoji').textContent = data.emoji;
  }
  
  async function submitGuess() {
    const emoji = document.getElementById('emoji').textContent;
    const guess = document.getElementById('guess').value;
    const response = await fetch('/guess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emoji, guess }),
    });
    const result = await response.json();
    document.getElementById('result').textContent = result.correct ? 'Correct!' : 'Wrong!';
  }
  
  fetchEmoji();
  