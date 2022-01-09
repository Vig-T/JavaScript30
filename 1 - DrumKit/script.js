function removetransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
function playsound(e) {
  // capturing the selected key with the help of keycode, matching the data attributes
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Guard clause
  if (!audio) return;
  audio.currenttime = 0;
  audio.play();

  // adding the transition class
  key.classList.toggle("playing");
}

// Create an Event listener on window ie; where all the keys are present
window.addEventListener("keydown", playsound);

const keys = document.querySelectorAll(".key");
keys.forEach((e) => e.addEventListener("transitionend", removetransition));
