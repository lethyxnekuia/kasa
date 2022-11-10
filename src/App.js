import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import'./App.css'

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/location/:id' element={<Location />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>

  );
}

export default App;
