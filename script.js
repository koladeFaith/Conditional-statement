// QUESTION 1
function process() {
  var customerAddress = address.value;

  addressAns.innerText = customerAddress.toLowerCase();
}

// QUESTION 5
function discountCal() {
  var evenNo = discount.value;
  if (evenNo % 2 == 0) {
    discountAns.innerText = "You get 20% discount";
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
// QUESTION 8
function checkBMI() {
  let firstNo = weight.value;
  let secondNo = height.value;
  var BMICal = firstNo / secondNo;
  if (BMICal < 18.5) {
    BMIAns.innerHTML = "UnderWeight";
  } else if (BMICal > 18.5 && BMICal <= 24.9) {
    BMIAns.innerHTML = "Normal Weight";
  } else if (BMICal > 25.0 && BMICal <= 29.9) {
    BMIAns.innerHTML = "OverWeight";
  } else {
    BMIAns.innerHTML = "Obesity";
  }
}

// QUESTION 10
function luggageWeight() {
  let luggageCheck = luggage.value;
  if (luggageCheck < 20) {
    weightAns.innerHTML = "UnderWeight";
  } else if (luggageCheck >= 20 && luggageCheck < 30) {
    weightAns.innerHTML = "Allowed";
  } else {
    weightAns.innerHTML = "OverWeight";
  }
}
