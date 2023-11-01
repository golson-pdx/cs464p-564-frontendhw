import { useState } from "react";
const url = "https://thronesapi.com/api/v2/Characters";

const Search = () => {
  const [character, setCharacter] = useState("");
  const [characterData, setCharacterData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(url)
      .then((response) => {
        //Show status of request in console
        console.log("Request successful", response);
        return response.json();
      })
      .then((data) => {
        //Loop through data
        data.forEach((data_item) => {
          if (data_item.fullName.includes(character)) {
            setCharacterData({
              name: data_item.fullName,
              image: data_item.imageUrl,
            });
          }
        });
      })
      .catch((error) => {
        console.error("Request failed", error);
      });
  };

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
        <label class="form-label">
          Find character:
        </label>
        <input
            type="text"
            class="form-label"
            value={character}
            required
            onChange={(e) => setCharacter(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input class="btn btn-primary" type="submit" />
        </div>
      </form>
      <div class="" id="result">
        <h2>Result:</h2>
        <h3>{characterData.name}</h3>
        <img src={characterData.image} alt={characterData.name} />
      </div>
    </>
  );
};

export default Search;
