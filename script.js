document.addEventListener("DOMContentLoaded", () => {
  // Find common AI input and button elements
  const input =
    document.querySelector("#question") ||
    document.querySelector("#userQuestion") ||
    document.querySelector("#aiQuestion") ||
    document.querySelector("textarea");

  const button =
    document.querySelector("#askBtn") ||
    document.querySelector("#askButton") ||
    document.querySelector("#askAI") ||
    document.querySelector("button");

  const answer =
    document.querySelector("#answer") ||
    document.querySelector("#aiAnswer") ||
    document.querySelector("#response");

  function getAnswer(question) {
    const q = question.toLowerCase().trim();

    if (!q) {
      return "Please enter a question.";
    }

    if (q.includes("math") || q.includes("2+2")) {
      return "Maths: 2 + 2 = 4.";
    }

    if (q.includes("science")) {
      return "Science helps us understand the natural world through observation and experiments.";
    }

    if (q.includes("english")) {
      return "English is a language used for communication, reading and writing.";
    }

    if (q.includes("hindi")) {
      return "Hindi is one of the major languages spoken in India.";
    }

    if (q.includes("sanskrit")) {
      return "Sanskrit is an ancient Indian language and an important classical language.";
    }

    if (q.includes("french")) {
      return "Bonjour means Hello in French.";
    }

    if (q.includes("german")) {
      return "Hallo means Hello in German.";
    }

    if (q.includes("japanese")) {
      return "こんにちは (Konnichiwa) means Hello in Japanese.";
    }

    if (q.includes("ai") || q.includes("artificial intelligence")) {
      return "AI stands for Artificial Intelligence. It enables computers to perform tasks that normally require human intelligence.";
    }

    return "EduNova AI Demo: I received your question. Real AI answers will be connected through a secure backend later.";
  }

  function askAI() {
    if (!input || !answer) return;

    const question = input.value;
    answer.textContent = getAnswer(question);
  }

  if (button) {
    button.addEventListener("click", askAI);
  }

  if (input) {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        askAI();
      }
    });
  }
});
