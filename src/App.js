import React from "react";
import "./App.css";
import ApodContent from  './components/ApodContent';
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <ApodContent />
    </div>
  );
}

export default App;