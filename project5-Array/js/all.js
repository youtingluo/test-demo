const userList = document.querySelector('main div');
const user = document.getElementById('user');
const double = document.getElementById('double');
const million = document.getElementById('million');
const sort = document.getElementById('sort');
const total = document.getElementById('total');
let data = [];
init();
// 監聽
user.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
sort.addEventListener('click', sortMoney);
million.addEventListener('click', showOnlyMillion);
total.addEventListener('click', calculateTotal);
// end
function init() {
  getRandomUser();
  getRandomUser();
  getRandomUser();
  renderUser();
}
function getRandomUser() {
  axios.get('https://randomuser.me/api').then((res) => {
    let newUser = res.data.results[0];
    const userObj = {
      name: `${newUser.name.first} ${newUser.name.last.toLowerCase()}`,
      money: Math.floor(Math.random() * 1000000),
    };
    addData(userObj);
  });
}
function addData(obj) {
  data.push(obj);
  renderUser();
}
function renderUser() {
  let str = '';
  data.forEach((item) => {
    str += `<h3>${item.name}<strong>${formatNumber(item.money)}</strong></h3>`;
  });
  userList.innerHTML = str;
}
function doubleMoney() {
  data = data.map((item) => {
    return { ...item, money: item.money * 2 };
  });
  renderUser();
}
function sortMoney() {
  data.sort((a, b) => b.money - a.money);
  renderUser();
}

function showOnlyMillion() {
  data = data.filter((item) => item.money >= 1000000);
  renderUser();
}
function calculateTotal() {
  let total = data.reduce((acc, user) => {
    return acc + user.money;
  }, 0);
  const el = document.createElement('div');
  el.classList.add('total');
  el.textContent = formatNumber(total);
  userList.appendChild(el);
}
// utility
function formatNumber(num) {
  return '$' + num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}
