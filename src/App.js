import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Room from './pages/Room';
import Map from './pages/Map';

function App() {
  return (
    <Routes>
      <Route path='/' element={<>gfdg</>} />
      <Route path='map' element={<Map />} />
      <Route path='room'>
        <Route path='first'>
          <Route index element={<Room data={'jkfd'} />} />
          <Route path="quiz" element={<Quiz data={QUIZ_DATA_1}/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;