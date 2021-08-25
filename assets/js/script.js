/*
  nama : abdullah
  email : abdullahxyz018@gmail.com
*/

const inputNumber = document.querySelector('.input-number');
const inputResult = document.querySelector('.input-result');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    if (inputNumber.value == 0) inputNumber.value = '';
    if (value) inputNumber.value += value;
  });
});

function clear() {
  const buttonClear = document.querySelector('.button-clear');
  buttonClear.addEventListener('click', function() {
    inputNumber.value = '0';
    inputResult.value = '0';
  });
}

clear();

function deleteCharacter() {
  const buttonDelete = document.querySelector('.button-delete');
  buttonDelete.addEventListener('click', function() {
    const value = inputNumber.value.length;
    inputNumber.value = inputNumber.value.substring(0, value - 1);
    if (value == 1) inputNumber.value = '0';
  });
}

deleteCharacter();

function total() {
  const button = document.querySelector('.button-total');
  button.addEventListener('click', function() {
    if (inputNumber.value != 0) {
      const result = eval(inputNumber.value);
      inputResult.value = result;
    }
  });
}

total(inputNumber, inputResult);
