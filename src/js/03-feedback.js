import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

let parsedData;

savedFormData();

function onFormInput(event) {
  event.target.name;
  event.target.value;
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function savedFormData() {
  const localStorageformData = localStorage.getItem(STORAGE_KEY);
  const saveData = localStorage.getItem(STORAGE_KEY);
  parsedData = JSON.parse(saveData);
  if (localStorageformData) {
    refs.input.value = parsedData.email;
    refs.textarea.value = parsedData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(parsedData);
}
