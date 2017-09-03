var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback__close");
var overlay =document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-feedback--show");
  overlay.classList.add("modal-overlay--show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-feedback--show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    if(popup.classList.contains("modal-feedback--show"))
      popup.classList.remove("modal-feedback--show");
      overlay.classList.remove("modal-overlay--show");
  }
});
