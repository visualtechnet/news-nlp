const nlpUrl = 'https://news-nlp-server.herokuapp.com';
//const nlpUrl = 'http://localhost:8090'
import { checkForName } from './nameChecker'

function handleSubmit () {
    let formText = document.getElementById('sentimentText').value
    checkForName(formText)


    fetch(`${nlpUrl}/sentiment`, {
        method: "POST",
        "Content-Type": "application/json;utf-8",
        body: JSON.stringify({ message: formText })
    })
    .then(res => res.json())
    .then(function(res) {
        const { model, score_tag, agreement, subjectivity, confidence, irony } = res
        document.querySelector('.model').innerHTML = model;
        document.querySelector('.scoreTag').innerHTML = score_tag;
        document.querySelector('.agreement').innerHTML = agreement;
        document.querySelector('.subjectivity').innerHTML = subjectivity;
        document.querySelector('.confidence').innerHTML = confidence;
        document.querySelector('.irony').innerHTML = irony;

    })
}

export { handleSubmit }
