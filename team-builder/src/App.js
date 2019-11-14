import React, {useState} from 'react';
import './App.css';
import TeamList from "./components/TeamList";
import Form from "./components/Form";
import Info from "./TeamInfo";

function App() {
  const [TeamInfo, setTeamInfo] = useState(Info)

  const addNewMember = newPerson =>{
    setTeamInfo([...TeamInfo, newPerson])
  }

  return (
    <div className="App">
      <h1> Your Team </h1>
      <Form addNewMember ={addNewMember} />
      <TeamList teamInfo={TeamInfo} />
    </div>
  );
}

export default App;
