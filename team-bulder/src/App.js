import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import MemberList from "./components/MemberList";
import Form from "./components/Form";
//mimic fetching data from an API
import data from "./data";

function App() {

  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Member Application</h1>
        <Form addNewMember = {addNewMember}/>
        <MemberList memberList = {members} />
      </header>
    </div>
  );
}

export default App;
