import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Quiz from './pages/Quiz';
import Room from './pages/Room';
import Map from './pages/Map';
import {ROOMS_DATA} from './features/data';

function App() {
  return (
    <Routes>
      <Route path='/' element={<>gfdg</>}/>
      <Route path='map' element={<Map/>}/>
      <Route path='room'>
        {ROOMS_DATA.map((roomData, index) => (
          <Route key={index} path={roomData.route}>
            <Route index element={<Room data={roomData}/>}/>
            <Route path='quiz' element={<Quiz data={roomData.quiz}/>}/>
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default App;
