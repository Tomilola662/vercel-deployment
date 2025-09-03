const textInput = document.getElementById("textInput");
const letterCount = document.getElementById("letterCount");

function countLetters(text) {
  const lettersOnly = text.replace(/[^a-zA-Z]/g, "");
  return lettersOnly.length;
}

function updateCounter() {
  const text = textInput.value;
  const count = countLetters(text);
  letterCount.textContent = count;
}

textInput.addEventListener("input", updateCounter);

textInput.addEventListener("paste", function () {
  setTimeout(updateCounter, 10);
});

updateCounter();
