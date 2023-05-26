var texts = [];

function addText() {
  var input = document.getElementById("textInput");
  var text = input.value.trim();

  if (text !== "") {
    texts.push(text);
    input.value = "";

    displayTexts();
  }
}

function sortText() {
  texts.sort();

  displayTexts();
}

function unsortText() {
  displayTexts();
}

function displayTexts() {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  for (var i = 0; i < texts.length; i++) {
    var p = document.createElement("p");
    p.textContent = texts[i];
    outputDiv.appendChild(p);
  }
}
