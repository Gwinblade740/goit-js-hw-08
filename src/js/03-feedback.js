import throttle from 'lodash.throttle';

const formList = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const dataObj = {};
formList.addEventListener('input', saveData);
formList.addEventListener('submit', throttle(cleanLocalStorage, 500));

checkStorageOnReload();

function saveData(event) {
  dataObj[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}

function cleanLocalStorage(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(dataObj);
}

function checkStorageOnReload() {
  if (localStorage.getItem('feedback-form-state')) {
    try {
      const parsedDataObj = JSON.parse(
        localStorage.getItem('feedback-form-state')
      );
      input.value = parsedDataObj.email;
      textArea.value = parsedDataObj.message;
    } catch (err) {
      console.log(err.name);
    }
  }
}
