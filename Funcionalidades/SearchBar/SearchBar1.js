import React, { useState, useEffect } from 'react';
import './SearchBar1Style.css';

import { FaSearch } from "react-icons/fa";


function SearchBar1() {

    const [textSearch, settextSearch] = useState('');
   
    return (
        <>
        <div className="SearchBar1">
            <input type="text" className="SearchInput"
            placeholder="Encontrar"
            value={textSearch} onChange={e=> settextSearch(e.target.value)}
            />
            <FaSearch onClick={() => window.alert("Clicou")} className="IconSearch"
            size="22px"/>
        </div>
        </>
  );
}

export default SearchBar1;