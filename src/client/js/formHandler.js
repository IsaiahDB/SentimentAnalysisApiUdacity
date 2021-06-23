
export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const subjectivityHolder = document.getElementById('subjectivityHolder');
    const agreementHolder = document.getElementById('agreementHolder');
    const ironyHolder = document.getElementById('ironyHolder');
   
    let formText = document.getElementById('name').value

    if (urlChecker(formText)) {
        fetch('http://localhost:8001/process', {
           method: 'POST',
           credentials: 'same-origin',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({formText: formText})
       })
       .then((res) => res.json())
       .then((res) => {
           console.log(res)
           updateUI(res)
       })
   } else {
       console.log("Error: Please enter a URL")
   }

    const updateUI = (response) => {
        subjectivityHolder.innerHTML = `Subjectivity: ${response.subjectivity}`;
        agreementHolder.innerHTML = `Agreement: ${response.agreement}`;
        ironyHolder.innerHTML = `Irony: ${response.irony}`;
    };
};
    


