var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback__close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var button = popup.querySelector(".btn");
var l_user = localStorage.getItem("username");
var l_email = localStorage.getItem("email");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("popup-show");
  popup.classList.add("modal-show");
  username.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("popup-show");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("popup-show");
      popup.classList.remove("modal-error");
    }
  }
});

overlay.addEventListener("click", function() {
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    overlay.classList.remove("popup-show");
    popup.classList.remove("modal-error");
  }
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  }
  else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
  }
});
