// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const characterBody = document.querySelector('#characters');

const data = fetch(url).then(response => {
    //Show status of request in console
        console.log('Request successful', response);
        return response.json();
    })
    .then(data => {
        //Loop through data 
        data.forEach((data_item) => {
            appendCharacter(data_item);
        })

    })
    .catch(error => {
        console.error('Request failed', error)
    });


const appendCharacter = function appendCharacterToBody(data_item) {
    console.log(data_item);
    characterBody.innerHTML += `<div class="col-6 text-center character"><img src="${data_item.imageUrl}" alt="${data_item.firstName} ${data_item.lastName}" class="img-fluid"/><h2>${data_item.firstName} ${data_item.lastName}</h2><span class="title">${data_item.title}</span></div>`
}