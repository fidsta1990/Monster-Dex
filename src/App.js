import React, { useState, useEffect } from "react";
import "./App.css";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchedField, setSearchedField] = useState("");
  const placeholder = "search monster...";

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const onChangeHandler = (e) => {
    setSearchedField(e.target.value);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchedField.toLowerCase())
  );

  useEffect(() => {
    loadData();
    setSearchedField(searchedField);
  }, [searchedField]);

  const loadData = async () => {
    try {
      const res = await fetch(API_URL);
      const user = await res.json();

      setMonsters(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <h1>Monster Dex</h1>
      <SearchBox
        value={searchedField}
        placeholder={placeholder}
        onChangeHandler={onChangeHandler}
        searchfield={searchedField}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
