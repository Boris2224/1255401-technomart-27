/*модальное окно : напишите нам */
var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-write-us-window");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=textarea]");

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show-form");

    if (storage) {
        login.value = storage;
      } else {
    login.focus();
       }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show-form");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !textarea.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
          }
      }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show-form")) {
        popup.classList.remove("modal-show-form");
        popup.classList.remove("modal-error");
      }
    }
  });

/*модальное окно : карта */

  var mapLink = document.querySelector(".mini-map-link");

  var mapPopup = document.querySelector(".modal-map-window");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });

  /*модальное окно : добавление в корзину*/

  var buyLink = document.querySelectorAll(".buy-button");
  var succesPopup = document.querySelectorAll(".modal-cart-success");
  var succesClose = document.querySelectorAll(".modal-close");
  var continueBuy = document.querySelectorAll(".continue-button");

  for(var i = 0; i < buyLink.length; i++){
    buyLink[i].addEventListener("click", function(event) {
      event.preventDefault();
      succesPopup[0].classList.add("modal-show");
    });
  };

  for(var i = 0; i < succesClose.length; i++){
    succesClose[i].addEventListener("click", function(event) {
      event.preventDefault();
      succesPopup[0].classList.remove("modal-show");
    });
  };

  for(var i = 0; i < continueBuy.length; i++){
    continueBuy[i].addEventListener("click", function(event) {
      event.preventDefault();
      succesPopup[0].classList.remove("modal-show");
    });
  };
