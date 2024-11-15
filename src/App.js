import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Room from './pages/Room';
import Map from './pages/Map';
import Main from './pages/Main';
import { ROOMS_DATA } from './features/data';
import Secret from './pages/Secret';
import Museum from './pages/Museum';
import Exhibit from './pages/Exhibit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='map' element={<Map />} />
      <Route path='museum' element={<Museum />} />
      <Route path='room'>
        <Route path='secret' element={<Secret />} />
        {ROOMS_DATA.map((roomData, index) => (
          <Route key={index} path={roomData.route}>
            <Route index element={<Room data={roomData} />} />
            <Route path='quiz' element={<Quiz data={roomData.quiz} />} />
            {roomData.exhibits.map((exhibit, index) => (
              <Route
                key={`${index}_exhibit`}
                path={exhibit.route}
                element={<Exhibit data={exhibit} />}
              />
            ))}
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default App;
