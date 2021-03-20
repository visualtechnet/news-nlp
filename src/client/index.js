import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { handleSubmit } from './js/formHandler'


const btnSubmit = document.querySelector("#btnSubmit");
const errorMessage = document.querySelector('.errorMessage');

btnSubmit.addEventListener('submit', function() {
    const sentimentText = document.querySelector('#sentimentText').value;

    event.preventDefault();
    event.stopPropagation();

    if (sentimentText.length === 0) {
        errorMessage.innerHTML = "Enter sentiment Text";
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('show');
        return false;
    } else {
        handleSubmit()
    }

    return false;
});

btnSubmit.addEventListener('click', function() {
    const sentimentText = document.querySelector('#sentimentText').value;

    event.preventDefault();
    event.stopPropagation();

    if (sentimentText.length === 0) {
        errorMessage.innerHTML = "Enter sentiment Text";
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('show');
        return false;
    } else {
        handleSubmit()
    }

    return false;
});
