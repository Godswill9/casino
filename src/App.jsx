import { useState } from 'react';
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import Game from './game';
import Header from './header';
import AllGames from './allGames';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/game/:id" element={<Game/>} />
          <Route path="/" element={<AllGames/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;
