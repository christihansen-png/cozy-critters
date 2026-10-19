

function pickOccasion(occasion, title) {
  const card = document.getElementById("card");
  const cardTitle = document.getElementById("card__title");

  cardTitle.textContent = title;
  card.className = "card card--" + occasion;
}

function occasionMessage(message) {
  const cardPrice = document.getElementById("card__price");
    const customBox = document.getElementById("custom__price--box");

    if (amount === "custom") {
      customBox.style.display = "flex";
      cardPrice.textContent = "0";
    } else {
      customBox.style.display = "none";
      cardPrice.textContent = amount;
    }
}

function pickPrice(amount) {
  const cardPrice = document.getElementById("card__price");
    const customBox = document.getElementById("custom__price--box");

    if (amount === "custom") {
      customBox.style.display = "flex";
      cardPrice.textContent = "0";
    } else {
      customBox.style.display = "none";
      cardPrice.textContent = amount;
    }
}

function typePrice(amount) {
  const cardPrice = document.getElementById("card__price");
  cardPrice.textContent = amount;
}


