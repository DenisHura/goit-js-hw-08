import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const formData = {};
const LOCALSTORAGE_KEY = "feedback-form-state";



form.addEventListener("input", throttle(onSaveDataInLocalStorage, 500))

form.addEventListener("submit", onSubmitForm)

onUpdateForm()


function onSaveDataInLocalStorage(e) {
    e.preventDefault();
  
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))

}


function onSubmitForm(e) {
    e.preventDefault();


    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value
    console.log(formData);

    localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset()
 }


function onUpdateForm() {
    
      const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    if (savedData === null) {
        return
    }    
         form.elements.email.value = parsedData.email
         form.elements.message.value = parsedData.message

    }

