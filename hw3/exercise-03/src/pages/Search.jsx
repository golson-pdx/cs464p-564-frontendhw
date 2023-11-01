import { useState } from 'react';
const url = 'https://thronesapi.com/api/v2/Characters';

const Search = () => {
    const [character, setCharacter] = useState("");
    const [characterData, setCharacterData] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch(url).then(response => {
            //Show status of request in console
                console.log('Request successful', response);
                return response.json();
            })
            .then(data => {
                //Loop through data 
                data.forEach((data_item) => {
                    if (data_item.fullName.includes(character)) {
                        setCharacterData({name: data_item.fullName, image: data_item.imageUrl});
                    }
                })
        
            })
            .catch(error => {
                console.error('Request failed', error)
        });

    }

    return (
        <> 
        <h1>Search</h1>
        <form onSubmit={handleSubmit}>
            <label>Find character:
                <input type="text"
                        value={character}
                        onChange={(e) => setCharacter(e.target.value)}/>
                <input type="submit"/>
            </label>
        </form>
        <div class="" id="result">
            <h1>{characterData.name}</h1>
            <img src={characterData.image} alt={characterData.name}/>
        </div>
        </>
    );
  };
  
  export default Search;