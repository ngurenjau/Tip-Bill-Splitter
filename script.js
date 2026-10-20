var button = document.getElementById("calculate");

button.addEventListener("click", function () {
  var bill = Number(document.getElementById("bill").value);
  var tipPercent = Number(document.getElementById("tip").value);
  var people = Number(document.getElementById("people").value);

  if (bill <= 0 || people <= 0) {
    document.getElementById("result").innerHTML = "Please enter a valid bill and number of people.";
    return;
  }

  var tipAmount = bill * (tipPercent / 100);
  var total = bill + tipAmount;
  var perPerson = total / people;

  document.getElementById("result").innerHTML =
    "Tip: " + tipAmount.toFixed(2) + "<br>" +
    "Total: " + total.toFixed(2) + "<br>" +
    "Each person pays: " + perPerson.toFixed(2);
});