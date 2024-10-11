let currentQuestionIndex = 0;
let timeLeft = 30;
let timer;

const questions = [
    {
        question: "في أي عام حدثت معركة بدر؟",
        options: ["624 م", "610 م", "632 م", "622 م"],
        answer: "624 م"
    },
    // أضف هنا الأسئلة الأخرى
];

document.getElementById('next-btn').addEventListener('click', nextQuestion);

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        resetTimer();
        currentQuestionIndex++;
    } else {
        alert("انتهى الاختبار! 😄");
    }
}

function showQuestion(question) {
    document.getElementById('question').textContent = question.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft === 0) {
            alert('انتهى الوقت!');
            nextQuestion();
        }
    }, 1000);
}

// بدء أول سؤال
nextQuestion();
