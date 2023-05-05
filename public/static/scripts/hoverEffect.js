/* Get all cards that contain "card" in card-ghjfr7 */
const cards = document.querySelectorAll("[class*=heroSection_card__EJCL2]");
const cardsContainer = document.querySelector(".heroSection_heroSection__content__rU8lS");

cardsContainer.onmousemove = (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    card.style.setProperty("--offsetX", `${offsetX}px`);
    card.style.setProperty("--offsetY", `${offsetY}px`);
  }
};
