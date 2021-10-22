import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
        let apiKey = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiKey).then(handleResponse);
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
                    <h3>What word are you looking for?</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleSearch} />
                    </form>
                </section>
                <Results results={results} />
            </div>
        );
    } else {
        load();
        return <div>Loading...</div>;
    }
}