function maskCard() {
    var cardNumberInput = document.getElementById("cardNumber");
    var cardNumber = cardNumberInput.value.replace(/\s/g, "");
  
    if (cardNumber.length !== 16) {
      alert("Please enter a 16-digit card number.");
      return;
    }
  
    var maskedCard = mask(cardNumber);
    cardNumberInput.value = maskedCard;
  }
  
  function unmaskCard() {
    var cardNumberInput = document.getElementById("cardNumber");
    var cardNumber = cardNumberInput.value.replace(/\s/g, ""); 
  
    if (cardNumber.length !== 16) {
      alert("Please enter a 16-digit card number.");
      return;
    }
  
    var unmaskedCard = unmask(cardNumber);
    cardNumberInput.value = unmaskedCard;
  }
  
  function mask(cardNumber) {
    var visibleDigits = cardNumber.slice(0, 4) + " **** **** " + cardNumber.slice(-4);
    var maskedCard = visibleDigits.replace(/(\d{4})/g, "$1 "); 
    return maskedCard;
  }
  
  function unmask(cardNumber) {
    var unmaskedCard = cardNumber.replace(/\s/g, ""); 
    return unmaskedCard;
  }
  