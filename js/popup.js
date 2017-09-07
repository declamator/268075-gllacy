var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback__close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.add("popup-show");
  popup.classList.add("modal-show");
  username.focus();
});

close.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.remove("popup-show");
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function() {
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("popup-show");
  }
});

overlay.addEventListener("click", function() {
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("popup-show");
  }
});
