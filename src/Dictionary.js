import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsRespnse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let apiKey = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiKey).then(handleResponse);

        const pexelsApiKey = `563492ad6f91700001000001fcc170517fb14aa190f3b4b63698410a `;
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsRespnse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSearch(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) { 
        return (
            <div className="Dictionary">
                <section>
                    <h3>What word would you like to search for?</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleSearch} />
                    </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} keyword={keyword} />
            </div>
        );
    } else {
        load();
        return <div>Loading...</div>;
    }
}