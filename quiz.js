function checkAnswer() {
    let correctAnswer = "4";

    let selectedRadio = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = selectedRadio.value;

    let feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {feedbackElement.textContent = ["That's incorrect. Try again!"];}

    // Function body
}

let submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);