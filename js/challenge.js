document.addEventListener("DOMContentLoaded", () => {
    
    let counter = 0;
    let timerInterval;
  
    const counterDisplay = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.createElement('button');
  
  
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
  
    // Function to increment counter
    function incrementCounter() {
      counter++;
      counterDisplay.textContent = counter;
    }
  
    // Start the timer
    timerInterval = setInterval(incrementCounter, 1000);
  
    // Event listener for plus button
    plusButton.addEventListener('click', () => {
      counter++;
      counterDisplay.textContent = counter;
    });
  
    // Event listener for minus button
    minusButton.addEventListener('click', () => {
      counter--;
      counterDisplay.textContent = counter;
    });
  
    // Event listener for like button
    likeButton.addEventListener('click', () => {
      const currentCounter = counter;
      const existingLikeItem = document.getElementById(`like-${currentCounter}`);
      if (existingLikeItem) {
        const likeCount = parseInt(existingLikeItem.dataset.likes) + 1;
        existingLikeItem.textContent = `${currentCounter} has been liked ${likeCount} times`;
        existingLikeItem.dataset.likes = likeCount;
      } else {
        const newLikeItem = document.createElement('li');
        newLikeItem.id = `like-${currentCounter}`;
        newLikeItem.dataset.likes = 1;
        newLikeItem.textContent = `${currentCounter} has been liked 1 time`;
        likesList.appendChild(newLikeItem);
      }
    });
  
    // Event listener for pause button
    pauseButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.style.display = 'none';
      document.querySelector('div').appendChild(resumeButton);
    });
  
   
    // Event listener for  submission
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentText = commentInput.value.trim();
      if (commentText) {
        const commentItem = document.createElement('div');
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });
  