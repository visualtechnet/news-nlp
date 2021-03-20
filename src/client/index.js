import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

import { handleSubmit } from './js/formHandler'


const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener('click', function() {
    handleSubmit()
});
