// get score containers
let score = document.getElementsByClassName("score");

// set default score value of 0
let homeScoreValue = 0;
let guestScoreValue = 0;

// get increment buttons
let scoreBtns = document.querySelectorAll(".inc");

// apply increment to homeScoreValue on click of buttons
scoreBtns[0].onclick = () => {
  homeScoreValue += 1;
  score[0].innerHTML = homeScoreValue;
};
scoreBtns[1].onclick = () => {
  homeScoreValue += 2;
  score[0].innerHTML = homeScoreValue;
};
scoreBtns[2].onclick = () => {
  homeScoreValue += 3;
  score[0].innerHTML = homeScoreValue;
};

// apply increment to guestScoreValue on click of buttons
scoreBtns[3].onclick = () => {
  guestScoreValue += 1;
  score[1].innerHTML = guestScoreValue;
};
scoreBtns[4].onclick = () => {
  guestScoreValue += 2;
  score[1].innerHTML = guestScoreValue;
};
scoreBtns[5].onclick = () => {
  guestScoreValue += 3;
  score[1].innerHTML = guestScoreValue;
};

// Buttons to save quarter score
let quarterBtn = document.querySelectorAll(".quart_btn");
let quarterScore = document.querySelectorAll(".quart_score");

quarterBtn[0].onclick = () => {
  quarterScore[0].innerHTML = score[0].innerHTML + "-" + score[1].innerHTML;
};
quarterBtn[1].onclick = () => {
  if (quarterScore[0].innerHTML !== "") {
    quarterScore[1].innerHTML = score[0].innerHTML + "-" + score[1].innerHTML;
  }
};
quarterBtn[2].onclick = () => {
  if (quarterScore[1].innerHTML !== "") {
    quarterScore[2].innerHTML = score[0].innerHTML + "-" + score[1].innerHTML;
  }
};
quarterBtn[3].onclick = () => {
  if (quarterScore[2].innerHTML !== "") {
    quarterScore[3].innerHTML = score[0].innerHTML + "-" + score[1].innerHTML;
  }
};

// RESET BUTTON
let resetBtn = document.querySelector(".reset");
resetBtn.onclick = () => {
  homeScoreValue = 0;
  guestScoreValue = 0;
  score[0].innerHTML = homeScoreValue;
  score[1].innerHTML = guestScoreValue;
  quarterScore[0].innerHTML = "";
  quarterScore[1].innerHTML = "";
  quarterScore[2].innerHTML = "";
  quarterScore[3].innerHTML = "";
};
