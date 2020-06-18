const interest = (data) => {
  let savings = 0;
  let interestAmount = 0;
  console.log(data);
  interestAmount =
    (data.amount * data.duration * data.rate) / (100 * data.durationType);
  savings = data.amount + interestAmount;
  return { savings, interestAmount };
};

function getData(e) {
  e.preventDefault();
  var amount = parseFloat(document.getElementById("amount").value);
  var duration = parseFloat(document.getElementById("duration").value);
  var durationType = parseFloat(document.getElementById("duration-type").value);
  var rate = parseFloat(document.getElementById("rate").value);

  let data = {
    amount: amount,
    duration: duration,
    durationType: durationType,
    rate: rate,
  };

  var result = interest(data);
  console.log(result);
  document.getElementById("profit").innerHTML = result.interestAmount;
  document.getElementById("earnings").innerHTML = result.savings;
}

document
  .getElementById("interest-calculator")
  .addEventListener("submit", getData);
