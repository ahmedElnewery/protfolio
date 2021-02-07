const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    this.style.transform = "rotateX(0deg)";
  });
}
const cardLinks =document.getElementsByClassName("card-link")
for (let i = 0; i < cardLinks.length; i++) {
    cardLinks[i].addEventListener("click", function (e) {
        e.preventDefault()
    });
  }
