const cards = document.querySelectorAll("[class*=heroSection_card__EJCL2]");
const cardsContainer = document.querySelector(".heroSection_heroSection__content__rU8lS");

function setCardOffset(card, x, y) {
  card.style.setProperty("--offsetX", `${x}px`);
  card.style.setProperty("--offsetY", `${y}px`);
}

function getMouseOffset(card, event) {
  const rect = card.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  return { offsetX, offsetY };
}

window.onload = () => {
  cardsContainer.onmousemove = (e) => {
    for (const card of cards) {
      const { offsetX, offsetY } = getMouseOffset(card, e);
      setCardOffset(card, offsetX, offsetY);
    }
  };
};
