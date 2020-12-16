import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import {
  Layout,
  Header,
  Footer,
  Main,
  Sidebar,
  Searchbar,
  ListOfItems,
  Card,

} from './components';
import {allAppsUrl} from './api';

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    (async (query) => {
      const response = await fetch(
          allAppsUrl,
      );
      const data = await response.json();
      setData( data );
    })(searchText);
  }, [searchText]);
  console.log(data);
  return (
    <Layout>
      <Header/>
      <Sidebar/>
      <Main>
        <Searchbar setSearchText={setSearchText} />
        <ListOfItems >
          {
            data.map() => {
            <Card data={data}/>
            }
          }
        </ListOfItems>
      </Main>
      <Footer/>
    </Layout>
  );
}

export default App;
