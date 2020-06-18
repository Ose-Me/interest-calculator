const interest = (data) => {
  let savings = 0;
  let interestAmount = 0;
  if (data.plan === "flexNaira") {
    interestAmount = data.amount * data.duration * 10;
  }
  savings = data.amount + interestAmount;

  console.log(interestAmount);
  console.log(savings);
  return savings;
};

function getData(e) {
  e.preventDefault();
  var amount = document.getElementById("amount").value;
  var duration = document.getElementById("duration").value;
  var plan = document.getElementById("plan").value;

  let data = {
    amount: amount,
    duration: duration,
    plan: plan,
  };

  var result = interest(data);
  console.log(result);
  if (result) {
    document.getElementById("savings-amount").value = data.amount;
    document.getElementById("savings").value = result;
  }
}

document
  .getElementById("interest-calculator")
  .addEventListener("submit", getData);
