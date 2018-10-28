import ratingTemplate from "./RatingComponent.html";

export class RatingComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.audioRating = 0;
  }

  querySelectors() {
    this.starsContainer = document.querySelector(".audioRating__stars");
    this.stars = this.mountPoint.getElementsByClassName("audioRating__star");
    this.arr = Array.from(this.stars);
  }

  addEventListeners() {
    this.starsContainer.addEventListener("click", e => {
      let a = e.target;
      for (let item in this.arr) {
        this.arr[item].classList.remove("selected");
      }
      a.classList.add("selected");
      this.audioRating = a.getAttribute("about");
    });
  }

  mount() {
    this.mountPoint.innerHTML = this.render();
    this.querySelectors();
    this.addEventListeners();
    console.log(this.audioRating);
  }

  render() {
    return ratingTemplate();
  }
}
