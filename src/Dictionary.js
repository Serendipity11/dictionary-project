import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000104c73da6e44946b0b431b4fa95099ca4";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="search-section">
          <form onSubmit={handleSubmit}>
            <input
              type="search text"
              onChange={handleKeywordChange}
              placeholder=" type a word"
            ></input>
          </form>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
        <p>
          “The difference between the almost right word and the right word is
          really a large matter. ’tis the difference between the lightning bug
          and the lightning.” ― Mark Twain
        </p>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
