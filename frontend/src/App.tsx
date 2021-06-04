import React from 'react';
import ShoutOutList from './components/ShoutOutList';
import './App.css'; 
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <h1>Shout Outs API</h1>
      <ShoutOutList />
    </div>
  );
}

export default App;
