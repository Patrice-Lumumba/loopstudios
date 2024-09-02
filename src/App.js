// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/header";
import './styles/index.scss'
// import Footer from "./Components/Footer/Footer";
import React from "react";
import Showcase from "./Components/Showcase/showcase";
import Interactive from "./Components/Interactive/interactive";
import Creation from "./Components/Creation/creation";


function App() {
  return (
    <>
      <Header/>
      <Showcase/>
      <Interactive/>
      <Creation />  

    </>

  // <Footer/>

  );

}

export default App;
