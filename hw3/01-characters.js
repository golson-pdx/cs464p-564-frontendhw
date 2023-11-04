// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const characterBody = document.querySelector('#characters');

// Fetch data from API
const getData = async function getDataFromThronesAPI() {
  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(response);

    //Loop through data
    data.forEach((dataItem) => {
      appendCharacter(dataItem);
    });
  } catch (error) {
    console.error('Request failed', error);
  }
};

const appendCharacter = function appendCharacterToBody(dataItem) {
  // Create object from data_item so we can reuse
  const character = {
    imgSrc: dataItem.imageUrl,
    fullName: `${dataItem.firstName} ${dataItem.lastName}`,
    title: dataItem.title,
  };

  // Initialize single character DOM element
  const singleCharacter = document.createElement('div');
  singleCharacter.classList.add(
    'col-sm-6',
    'col-lg-3',
    'text-center',
    'character'
  );

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
};

// Initialize everything
getData();
