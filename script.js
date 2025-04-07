// QUESTION 1
function process() {
  var customerAddress = address.value;

  addressAns.innerText = customerAddress.toLowerCase();
}
// QUESTION 3
function processNoSpace() {
  if (spaceAdjust.value == "") {
    alert("This cannot be Empty");
  } else {
    var text = spaceAdjust.value.trim();
    noSpaceAns.innerHTML = text;
  }
}
// QUESTION 5
function discountCal() {
  var evenNo = discount.value
  if (evenNo%2 == 0) {
    discountAns.innerText = "You get 20% discount"
  } else {
     discountAns.innerText = "You did not get any discount";
  }
}

// QUESTION 6
function checkTem() {
  var customerTem = temperature.value;
  //   temAns.innerText = customerTem;
  if (customerTem <= 19) {
    temAns.innerText = "Cold";
  } else if (customerTem >= 20 && customerTem <= 28) {
    temAns.innerText = "Warm";
  } else {
    temAns.innerText = "Hot";
  }
}
