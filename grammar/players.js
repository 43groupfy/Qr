const allQuestions = questionsPart1;

document.addEventListener("DOMContentLoaded", function () {
  const questionsContainer = document.getElementById("questions");
  const refreshButton = document.getElementById("refresh-button");

  const optionsPrefix = ["A. ", "B. ", "C. ", "D. ", "E. "];
  const questionsPerPage = 1;
  const selectedOptions = new Array(allQuestions.length).fill(null);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function displayQuestions(startIndex) {
    questionsContainer.innerHTML = "";

    for (let i = startIndex; i < startIndex + questionsPerPage && i < allQuestions.length; i++) {
      const currentQuestion = allQuestions[i];
      const questionElement = document.createElement("div");
      questionElement.innerHTML = `<button>QUESTION</button><br> ${currentQuestion.question}`;
      questionsContainer.appendChild(questionElement);
      questionElement.style.margin = "10px 10px 25px";
      questionElement.style.fontWeight = "bold";
      
      // Tambahkan aturan CSS untuk gaya gambar di dalam pertanyaan 
      const imagesInQuestion = questionElement.querySelectorAll('img'); imagesInQuestion.forEach((img) => { img.style.maxWidth = "100%"; img.style.margin = "10px 0"; });

currentQuestion.options.forEach((option, optionIndex) => { const optionElement = document.createElement("div"); optionElement.innerHTML = optionsPrefix[optionIndex] + option; optionElement.classList.add("option"); optionElement.dataset.optionIndex = optionIndex;
				 optionElement.addEventListener("click", function () { checkAnswer(optionIndex, currentQuestion.correctIndex, i, optionElement); });
				 
				 // Cari semua elemen gambar dalam opsi 
				 const imagesInOption = optionElement.querySelectorAll('img'); imagesInOption.forEach((img) => { 
				 img.style.maxWidth = "100%"; 
				 				img.style.height = "auto"; 
				 				// Menyesuaikan tinggi agar gambar tidak terdistorsi 
				 				img.style.margin = "10px 0"; // Margin atas-bawah 10px 
				 				});
				 
				  questionsContainer.appendChild(optionElement); });

      const feedbackElement = document.createElement("div");
      feedbackElement.classList.add("feedback");
      questionsContainer.appendChild(feedbackElement);

      const separator = document.createElement("hr");
      questionsContainer.appendChild(separator);
    }
  }

  function checkAnswer(selectedOptionIndex, correctOptionIndex, questionIndex, selectedOptionElement) {
    const feedbackElement = questionsContainer.querySelectorAll(".feedback")[questionIndex];

    if (selectedOptions[questionIndex] === null) {
      selectedOptions[questionIndex] = selectedOptionIndex;

      if (selectedOptionIndex === correctOptionIndex) {
        selectedOptionElement.style.backgroundColor = "#9CE69F";
        feedbackElement.textContent = ">> Jawaban Anda sangat tepat";
        feedbackElement.style.color = "#4CAF50";
      } else {
        const correctOptionElement = questionsContainer.querySelectorAll(".option")[correctOptionIndex + questionIndex * 4];
        selectedOptionElement.style.backgroundColor = "#FDFD96";
        correctOptionElement.style.backgroundColor = "#9CE69F";
        feedbackElement.textContent = ">> Jawaban Anda kurang tepat";
        feedbackElement.style.color = "#FFAA1D";
      }
    }
  }

  refreshButton.addEventListener("click", function () {
    shuffleArray(allQuestions);
    selectedOptions.fill(null);
    displayQuestions(0);
  });

  shuffleArray(allQuestions);
  displayQuestions(0);
});
