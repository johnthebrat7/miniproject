document.getElementById("contactForm").addEventListener("submit",
function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    alert(`Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
});
document.getElementById("submitQuiz").addEventListener("click",
function() {
    const answers = {
        q1: "a",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "a"
    };
    let score = 0;
    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const userAnswer =
document.querySelector(`input[name="q${i}"]:checked`);
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            score++;
        }
    }
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your score is ${score}/5`;
    const answersElement = document.createElement("div");
    answersElement.classList.add("answers");
    answersElement.innerHTML = "<h2>Correct Answers:</h2>";
    for (let i = 1; i <= Object.keys(answers).length; i++) {
        answersElement.innerHTML += `<p>Question ${i}:
${answers[`q${i}`]}</p>`;   
    }
    resultElement.appendChild(answersElement);
});
