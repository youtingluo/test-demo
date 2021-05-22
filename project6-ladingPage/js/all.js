const toggleBtn = document.getElementById('toggle');
const ctaBtn = document.getElementById('open');
const navbar = document.getElementsByTagName('nav')[0];
const modal = document.querySelector('.modal-container');

toggleBtn.addEventListener('click', openMenu);
ctaBtn.addEventListener('click', openModal);
function openMenu() {
  document.body.classList.toggle('active');
}
function openModal() {
  modal.classList.add('active');
}
window.addEventListener('click', function (e) {
  e.target === modal ? modal.classList.remove('active') : false;
});
