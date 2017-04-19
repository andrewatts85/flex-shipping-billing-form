var hide = function() {
  var cb = document.getElementById("checkbox");
  var shipping = document.getElementsByClassName("shipping");
  if (cb.checked) {
    for (var i=0; i<shipping.length; i++) {
      shipping[i].classList.add("hide");
    }
  } else {
    for (var i=0; i<shipping.length; i++) {
      shipping[i].classList.remove("hide");
    }
  }
}
checkbox.addEventListener("click", hide);
