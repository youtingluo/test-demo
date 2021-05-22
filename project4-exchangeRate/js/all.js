const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
console.log(amount_one, amount_two);
// 監聽
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
amount_two.addEventListener('input', calculate);
fetch('exchange.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
function calculate() {
  console.log('go');
}
