import React from "react";
import "./App.css";
import ApodContent from  './components/ApodContent';
import Header from './components/header/Header'
import FooterNav from './components/footer/FooterNav'

function App() {
  return (
    <div className="App">
      <Header />
      <ApodContent />
      <FooterNav />
    </div>
  );
}

export default App;