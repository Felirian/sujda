import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Room from './pages/Room';
import Map from './pages/Map';

import Main from './pages/Main';

import { QUIZ_DATA_1 } from './features/data';
import { ROOMS_DATA } from './features/data';
import Secret from './pages/Secret';
import Museum from './pages/Museum';
import Exhibit from './pages/Exhibit';

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIPod = userAgent.includes('iPod');
    const isIPhone = userAgent.includes('iPhone');
    const isIPad = userAgent.includes('iPad');
    const isAndroid = userAgent.includes('Android');
    const isWebOS = userAgent.includes('webOS');

    // Выполняем редирект в зависимости от типа устройства
    if (isIPad || isIPhone || isIPod || isAndroid) {
      console.log('isAndroid');
    } else if (isWebOS) {
      console.log('isWebOS');
    } else {
      console.log('web');
    }
  }, []);
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
            {roomData.exhibits.map((exhibit, index) => {
              return (
                <Route
                  key={`${index}_exhibit`}
                  path={exhibit.route}
                  element={<Exhibit data={exhibit} />}
                />
              );
            })}
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default App;
