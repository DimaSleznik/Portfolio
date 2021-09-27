import "./App.css";
import React from "react";
import { Router } from "./routing";
import { Header } from "./Components/Header";
import { Footer } from "./Components";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
