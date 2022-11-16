import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Items from "./pages/Items";
import Agree from "./pages/Agree";
import Home from "./pages/Home";


class App extends React.Component {
  render() {
      return (
    <div id="content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Agree />} />
          <Route path="/home" element={ <Home /> } />
          <Route path="/items" element={ <Items /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
  }

}

export default App;
