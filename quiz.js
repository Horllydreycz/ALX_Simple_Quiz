const feedBack = document.getElementById("feedback");

function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the checked radio button with name="quiz"
  const selectedOption = document.querySelector("input[name='quiz']:checked");
  const userAnswer = selectedOption ? selectedOption.value.trim() : null;

  // Compare and provide feedback
  if (userAnswer === correctAnswer) {
    feedBack.textContent = "Correct! Well done.";
  } else if (userAnswer === null) {
    feedBack.textContent = "Please select an answer.";
  } else {
    feedBack.textContent = "That's incorrect. Try again!";
  }
}

// Attach click listener to the submit button
const submitBtn = document.getElementById("submit-answer");
if (submitBtn) {
  submitBtn.addEventListener("click", checkAnswer);
}
