// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const characterBody = document.querySelector('#characters');

// Fetch data from API
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

    // Create object from data_item so we can reuse
    const character = {
        imgSrc: data_item.imageUrl,
        fullName: `${data_item.firstName} ${data_item.lastName}`,
        title: data_item.title
      };

    // Initialize single character DOM element
    const singleCharacter = document.createElement('div');
    singleCharacter.classList.add('col-sm-6', 'col-lg-3', 'text-center','character');

    // Create character image DOM element
    const image = document.createElement('img');
    image.classList.add('img-fluid');
    image.src = character.imgSrc;
    image.alt = `${character.fullName}`;
    singleCharacter.append(image);

    // Create character name DOM element
    const fullName = document.createElement('h2');
    fullName.textContent = `${character.fullName}`;
    singleCharacter.append(fullName);

    // Create character title DOM element
    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = character.title;
    singleCharacter.append(title);

    // Append single character to character body
    characterBody.append(singleCharacter);
}