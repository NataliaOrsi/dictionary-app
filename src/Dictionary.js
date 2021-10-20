import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        
        let apiKey = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiKey).then(handleResponse);
    }

    function handleSearch(event) {
        setKeyword(event.target.value);
    }
    
    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleSearch} />
        </form>
    </div>
    );
}