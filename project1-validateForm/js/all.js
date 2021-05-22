const form = document.querySelector('.js-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// 顯示錯誤訊息
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.textContent = message;
  return false;
}
// 驗證成功
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  return true;
}
// 驗證 Email
function validateEmail(mail) {
  //信箱的正規表達式寫法
  let reg = /.+@.+\..+/;
  // 任何字元至少一個接 "@" 接任何字元至少一個接 "." 接任何字元至少一個
  if (!mail.value.trim()) {
    showError(mail, `信箱格式錯誤`);
  } // true
}
// 檢查所有欄位是否有值
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.name} 必填`);
    } else {
      showSuccess(input);
    }
  });
}
// 檢查長度
function checkLength(input, min) {
  if (input.value.length < min) {
    showError(input, `${input.name} 長度至少要 ${min} 碼`);
  }
}
// 檢查密碼是否一樣
function checkPasswordMatch(p1, p2) {
  if (p1.value !== p2.value) {
    showError(password2, `密碼不符合`);
  }
}
// 監聽
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  validateEmail(email);
  checkLength(password, 8);
  checkPasswordMatch(password, password2);
});
