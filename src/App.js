import React from 'react'
import './App.css';
import { useEffect, useState } from 'react';
import { sortBy, flow } from 'lodash';
import {Layout, Header, Footer, Main, Sidebar, Searchbar, ListOfItems} from './components';

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

  return (
    <Layout>
      <Header/>
      <Sidebar/>
      <Main>
        <Searchbar setSearchText={setSearchText} />
        <ListOfItems data={data} />
      </Main>
      <Footer/>
    </Layout>
  );
}

export default App;
