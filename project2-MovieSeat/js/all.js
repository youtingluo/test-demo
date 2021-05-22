const movie = document.getElementById('movie');
const seatContainer = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
movie.addEventListener('change', init, false);
function init(e) {
  movie.value = e.target.value;
  let num = 0;
  seat.forEach((item) => {
    if (item.classList.item(1) === 'selected') {
      item.classList.remove('selected');
    }
  });
  count.textContent = num;
  total.textContent = 0;
}
function countSelectedNum() {
  let num = 0;
  let price = movie.value;
  seat.forEach((item) => {
    if (item.classList.item(1) === 'selected') {
      num += 1;
    }
  });
  count.textContent = num;
  total.textContent = num * price;
}
countSelectedNum();
seatContainer.addEventListener('click', choiceSeat, false);
function choiceSeat(e) {
  if (
    !e.target.classList.contains('seat') ||
    e.target.classList.contains('occupied')
  ) {
    return;
  }
  if (movie.value === '0') {
    alert('請選取電影');
    return;
  }
  e.target.classList.toggle('selected');
  countSelectedNum();
}
