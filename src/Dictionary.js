import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse (response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=48eb25c4a02543a3ta93fefffob47a4f`;
    axios.get(apiUrl).then(handleResponse);
    
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
