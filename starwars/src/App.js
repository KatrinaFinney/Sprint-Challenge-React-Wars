import React, { useState, useEffect } from "react";
import axios from "axios";
import StarToast from "./components/StarToast"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
     
      .then(response => {
        console.log(response.data);

        setData(response.data.results);
         
      })
      .catch(error => {
        console.log("The data was not returned", error);
      }); 
  }, []);

  
  return (
    <div className="App">

      <h1 className="Header" style={{ background: 'black' , color: 'white', textAlign: 'center'}}>I Conquered 'React Wars'</h1>

     {data.map((starPeople, index) => {
          return <StarToast key={index} name={starPeople.name} height={starPeople.height} birthday={starPeople.birth_year}
          mass={starPeople.mass} gender={starPeople.gender}
          />
        })}
      
    </div>
    
  );
 
  }

export default App;
