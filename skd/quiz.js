let currentQuestionIndex = 0;
let selectedAnswers = { A1: [], B1: [], C1: [] };
let timer;

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('submit-btn').addEventListener('click', submitQuiz);

function startQuiz() {
    document.getElementById('start-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'flex';
    displayQuestion();
    displayQuestionList();
    startTimer(120);
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');

    // Menampilkan nomor soal
    document.getElementById('question-number').textContent = `No. ${currentQuestionIndex + 1}`;

    questionContainer.innerHTML = `<h3>${question.question}</h3>`;
    question.options.forEach((option, index) => {
        const isSelected = selectedAnswers[question.category][currentQuestionIndex] === index ? 'selected' : '';
        questionContainer.innerHTML += `
            <div class="option ${isSelected}" data-value="${index}">
                ${option}
            </div>
        `;
    });

    // Tambahkan event listener ke setiap opsi
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });

    updateNavigationButtons();
}

function selectOption(event) {
    const selectedOption = event.currentTarget;
    const value = parseInt(selectedOption.getAttribute('data-value'));

    // Simpan jawaban yang dipilih
    const question = questions[currentQuestionIndex];
    const category = question.category;
    selectedAnswers[category][currentQuestionIndex] = value;

    // Hapus kelas 'selected' dari semua opsi, lalu tambahkan ke opsi yang dipilih
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    selectedOption.classList.add('selected');

    displayQuestionList(); // Refresh nomor soal setelah jawaban dipilih
}

function displayQuestionList() {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';

    questions.forEach((question, index) => {
        let buttonClass = '';

        // Periksa apakah soal sudah terjawab
        if (selectedAnswers[question.category][index] !== undefined) {
            buttonClass = 'answered';
        }

        // Tandai soal yang sedang aktif
        if (index === currentQuestionIndex) {
            buttonClass += ' active';
        }

        questionList.innerHTML += `<button class="question-btn ${buttonClass}" data-index="${index}">${index + 1}</button>`;
    });

    // Tambahkan event listener ke setiap tombol nomor soal
    document.querySelectorAll('.question-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentQuestionIndex = parseInt(btn.dataset.index);
            displayQuestion();
            displayQuestionList(); // Refresh nomor soal setelah perubahan
        });
    });
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').style.display = currentQuestionIndex < questions.length - 1 ? 'inline' : 'none';
    document.getElementById('submit-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'inline' : 'none';
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
    displayQuestionList(); // Tambahkan ini untuk memastikan nomor soal diperbarui
}

function prevQuestion() {
    currentQuestionIndex--;
    displayQuestion();
    displayQuestionList(); // Tambahkan ini untuk memastikan nomor soal diperbarui
}

function startTimer(seconds) {
    let time = seconds;
    const timerDisplay = document.getElementById('timer');
    timer = setInterval(() => {
        time--;
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
        if (time <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    if (window.confirm("Apakah Anda yakin ingin mengumpulkan jawaban?")) {
        clearInterval(timer);
        calculateResults();
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';
    }
}

function calculateResults() {
    const resultTableBody = document.getElementById('result-table').querySelector('tbody');
    const totalScores = { A1: 0, B1: 0, C1: 0 };
    let totalScore = 0;

    resultTableBody.innerHTML = '';

    // Map kategori ke nama deskriptif
    const categoryNames = {
        A1: 'Tes Wawasan Kebangsaan',
        B1: 'Tes Intelegensi Umum',
        C1: 'Tes Karakteristik Pribadi'
    };


    // Penilaian untuk setiap kategori
    for (let category in totalScores) {
        let score = 0;

        selectedAnswers[category].forEach((answer, index) => {
            const question = questions[index];
            if (question.category === category) {
                if (category === 'C1') {
                    score += question.values[answer] || 0;
                } else if (answer === question.correct) {
                    score += 171;
                }
            }
        });

        totalScores[category] = score;
        totalScore += score;

        // Menentukan warna berdasarkan ambang batas
        const threshold = getThresholdForCategory(category);
        const color = score < threshold ? 'red' : 'black';

        resultTableBody.innerHTML += `<tr><td class="kategori">${categoryNames[category]}</td><td style="color: ${color}">${score}</td></tr>`;
    }
    
    // Menampilkan total skor
    const totalThreshold = 6;
    const totalColor = totalScore < totalThreshold ? 'red' : 'black';
    resultTableBody.innerHTML += `<tr><td>Total Score</td><td style="color: ${totalColor}">${totalScore}</td></tr>`;



// Menampilkan feedback
const feedback = document.getElementById('feedback');
let feedbackText = 'Maaf, nilai anda tidak memenuhi ambang batas.';

if (totalScores.A1 >= getThresholdForCategory('A1') &&
    totalScores.B1 >= getThresholdForCategory('B1') &&
    totalScores.C1 >= getThresholdForCategory('C1') &&
    totalScore >= totalThreshold) {
    feedbackText = '<span style="color: green;">Selamat! Semua nilai kamu memenuhi ambang batas.</span>';
}
    feedback.innerHTML = feedbackText;
}

function getThresholdForCategory(category) {
    // Ambang batas untuk setiap kategori
    switch (category) {
        case 'A1':
            return 1; // Ambang batas untuk Matematika
        case 'B1':
            return 1; // Ambang batas untuk Fisika
        case 'C1':
            return 3; // Ambang batas untuk Biologi
        default:
            return 0;
    }
}

