//card name input.....
const cardName = document.querySelector('#card-name');
//card name error....
const ErrorText = document.querySelector('#error_text');
//cardholder number input.....
const CardNumber = document.querySelector('#card-number');
//cardholder number error.....
const ErrorNumber = document.querySelector('#error_number');
//Exp date(MM) input..
const MM = document.querySelector('#mm');
//Exp date(MM) input...
const YY = document.querySelector('#yy');
// Exp date(MM/YY)......
const ErrorMMYY = document.querySelector('#error_Exp');
//CVC input.....
const Cvc = document.querySelector('cvc');
//CVC error input.....
const ErrorCvc = document.querySelector('error_cvc');
// submit btn....
const SubmitBtn = document.querySelector('#btn_form');
//modal
const Modal = document.querySelector('.modle-card');
const BtnModal = document.querySelector('#btn_modle');
const Form = document.querySelector('.form');

SubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const Name = cardName.value;

  const NameCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (Name === '' || !NameCheck.test(Name)) {
    cardName.style.border = '1px solid red';
    ErrorText.textContent = 'Valid name required';
    ErrorText.style.color = 'red';
  } else {
    ErrorText.textContent = '';
    cardName.value = '';
    Form.style.display = 'none';
    Modal.style.display = 'block';
  }

  //Check if the input is a string.
  if (typeof CardNumber !== 'string') {
    CardNumber.style.border = '1px solid red';
    ErrorNumber.textContent = 'Valid number required';
    ErrorNumber.style.color = 'red';
    return false;
  } else {
    ErrorNumber.textContent = '';
    CardNumber.value = '';
  }
  //Check if the input is a 12 characters long.
  if (CardNumber.length !== 12) {
    return false;
  } else {
    console.log('Wrong format, numbers only');
  }
  //Check if the input contains any letters.
  if (/[a-zA-Z]/.test(CardNumber)) {
    return false;
  } else {
    console.log('Wrong format, numbers only');
  }
  // The input is valid.
  // ErrorNumber.textContent = '';
  // CardNumber.value = '';
  return true;
});

BtnModal.addEventListener('click', () => {
  Modal.style.display = 'none';
  Form.style.display = 'block';
});

window.addEventListener('load', () => {
  cardName.classList.remove('error');
});
