//card number input.....
const ErrorCard = document.querySelector('#error_inputNum');

const ErrCardNUm = document.querySelector('#error_num');
const Exp_Month = document.querySelector('#MM');
const Exp_Year = document.querySelector('#YY');
const ErrorExp = document.querySelector('#error_exp');
const ErrorCvIn = document.querySelector('#error_cvInput');
const ErrorCvc = document.querySelector('#error_cvc');
const SubBtn = document.querySelector('.Sub_btn');
const ErrorClass = document.querySelector('.hidden');

let isValid = false;

ErrorCard.addEventListener('input', function () {
  if (+ee.value > 31 || +inputDay.value < 0) {
    ErrorCard.style.border = '1px solid hs1(0, 100%, 67%)';
    ErrCardNUm.style.color = 'hs1(0,100%, 67%)';
    isValid = false;
    return;
  } else {
    isValid = true;
    ErrorCard.style.border = '';
    ErrCardNUm.style.color = '';
  }

  if (+inputDay.value === 0) {
    errorDay.textContent = 'this field id required';
    inputDay.style.border = '1px solid hs1(0,100%, 67%)';
    labelDay.style.color = 'hs1(0, 100%, 67%)';
    isValid = false;
    return;
  } else {
    isValid = true;
    errorDay.textContent = '';
    inputDay.style.border = '';
    labelDay.style.color = '';
  }
});

SubBtn.addEventListener('click', function () {});
tg;
