
import SearchBox from './SearchBox.js'
import CardList from './CardList'
import { useState } from 'react';
import './app.css'
import {robos} from './robos';
import Scroll from './Scroll.js';
import ErrorBoundary from './ErrorBoundary.js';


function App() {
  const [robots , setRobots] = useState(robos);

  //let robos = [];

  const getUsersDynamically = async() => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      setRobots(users);
      robos = users;
    });

  }

  // getUsersDynamically();


  const updateRobotsList = (searchQuery) => {
    if(searchQuery !== ""){ 
        setRobots(robots.filter((robo) => {
          return robo.name.toLowerCase().includes(searchQuery.toLowerCase()); //filtered based on the search query
        }));
    }else{
      setRobots(robos); // Inital Full List
    }
  }

  return (
    <div className = "tc">
      <h1 className="robo-header"> ROBO FRIENDS</h1>
      <SearchBox updateList={updateRobotsList}/>
      <Scroll>
        <ErrorBoundary>
          <CardList robots={robots}  />
        </ErrorBoundary>
      </Scroll>
      </div>
  );
}

export default App;
