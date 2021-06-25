

export function handleSubmit(event) {

    event.preventDefault()
    let inputTextUrl = document.getElementById('name').value 

    if(Client.urlChecker(inputTextUrl)) {
        fetch('http://localhost:8081/postData', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({inputTextUrl: inputTextUrl})
        })
        .then(res => res.json())
        .then(res => {
            document.getElementById('model').innerHTML = `Model: ${res.model}`;
            document.getElementById('score_tag').innerHTML = `Score: ${res.score_tag}`;
            document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidence:  ${res.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
        })


    } else {
        alert("Wrong Url")
    }
};