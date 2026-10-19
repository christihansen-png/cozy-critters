
let cartCount = 0;

function pickOccasion(occasion, title) {
  const card = document.getElementById("card");
  const cardTitle = document.getElementById("card__title");
  const customMessage = document.getElementById('message__box')

  if (occasion === 'custom') {
    customMessage.style.display = "flex";
    cardTitle.textContent = "Thanks for...";
  } else {
    customMessage.style.display = "none";
    cardTitle.textContent = title;
  }

  card.className = "card card--" + occasion;
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

function typeName(spot, name) {
  const cardSpot = document.getElementById(spot);
  cardSpot.textContent = name;
}

function sendGift() {
  const email = document.getElementById('email').value;
  const giftConfirm = document.getElementById('gift__confirm');

  giftConfirm.textContent = "💕 Your Cozy Critter Gift Card is on its way to " + email + "!";
  giftConfirm.style.display = "block";
}


function addToCart() {
  cartCount = cartCount + 1;
  document.getElementById("cart__count").textContent = cartCount;
}

function toggleWish(button) {
  if (button.textContent === "Add to WishList") {
    button.textContent = "♥ On your WishList";
  } else {
    button.textContent = "Add to WishList";
  }
}