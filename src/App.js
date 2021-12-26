import './App.css';
import LatestStories from './Components/LatestStories';
import React, { useEffect, useState } from 'react';

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            await fetch(` https://api.nytimes.com/svc/topstories/v2/insider.json?api-key=${process.env.REACT_APP_API_KEY}`)
            .then(res=> res.json())
            .then(result => {
                setData(result)
            })
            
        }
        
        getArticles();

    }, [])


  return (
    <div className="App">
  
    {(typeof data.status != "undefined") ?
    (<LatestStories newsData={data}/>) :
    (
      <div></div>
    )}

    </div>
  );
}

export default App;
