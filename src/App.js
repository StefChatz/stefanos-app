import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import { sortBy, flow } from 'lodash';

function App() {
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(()=>{
    (async (query) => {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries/search?query=${query}`
      );
      const data = await response.json();
      setData( data );
    })(searchText)
  }, [searchText])

  const filteredData = (data) => data.filter(item => item.state === "Virginia");

  const sortedDataById = (data) => sortBy(data, ['id'])  

  const funcComp = flow([filteredData, sortedDataById])


  return (
    <div className="App">
      <input
       onChange={event => setSearchText(event.target.value)}/>
       <ul>
        {funcComp(data).map(({name, id, state}) => 
          <li key={id} className='itemName' >{`${id} ${name} / ${state}`}</li>
        )}
       </ul>
    </div>
  );
}

export default App;
