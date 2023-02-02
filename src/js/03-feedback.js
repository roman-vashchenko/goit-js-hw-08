// import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);

let data = {};
savedFormData();

function onFormInput(event) {
  emailValue = event.currentTarget.elements.email.value;
  messageValue = event.currentTarget.elements.message.value;
  data.mail = emailValue;
  data.message = messageValue;
  localStorage.setItem(STORAGE_KEY, data);
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Form send');
  event.currentTarget.reset();
  // console.log(data);
}

function savedFormData(event) {
  const formData = localStorage.getItem(STORAGE_KEY);
  if (formData) {
    refs.input.value = '';
    refs.textarea.value = '';
  }
}
