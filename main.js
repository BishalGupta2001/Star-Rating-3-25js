const star = document.querySelectorAll(".fa-star-o"); // star img
const currentRatingStarValue = document.querySelector(".ratingValue"); // how much we have given it will show the output
let currentTotalSelectedStarOutput = -1;

star.forEach((starItem, index) => {
  // this line set custom data attribute called RATING ye jo rating hai har star ma jayega or +1 karega (bcoz of 0th index)
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  // ye line leke aya (retrives) rating value ko star element se joki user se triggred hua tha
  const currentRatingValue = event.target.dataset.rating; // abhi kya rating hai jaha RATING hai waha hai
  if (!currentRatingValue)
    return; //agar abhi ka rating falsy dee raha hai toh simply return
  else handleUpdateRating(currentRatingValue); // nahi toh handleUpdateRating ko call  kardiye abhi k rating k liye
}

function handleUpdateRating(getCurrentValue) {
  //this line define habdleUpdateRating function and a parameter known as getCurrentValue
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentValue) {
      //index agar chota hai  toh fa-star-o" ko replace kardenge fa-star se
      star[i].classList.replace("fa-star-o", "fa-star");
    } else {
      //index agar bada hai toh  fa-star ko replace kardenge fa-star-o se
      star[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

// //ye mota moti value change karne k liye hai that's it
function handleOnClick(event) {
  const currentRatingValue = event.target.dataset.rating; //rating lake dega
  currentTotalSelectedStarOutput = currentRatingValue; // update the total star rating
  currentRatingStarValue.textContent = currentTotalSelectedStarOutput; //display total star rating
}

// // ye function call kiya jitna select hua hai
function handleMouseLeave() {
  handleUpdateRating(currentTotalSelectedStarOutput);
}
