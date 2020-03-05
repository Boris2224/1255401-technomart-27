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