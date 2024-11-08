import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Quiz from './pages/Quiz';
import Room from './pages/Room';
import Map from './pages/Map';
import {ROOMS_DATA} from './features/data';
import Secret from "./pages/Secret";

function App() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIPod = userAgent.includes("iPod");
    const isIPhone = userAgent.includes("iPhone");
    const isIPad = userAgent.includes("iPad");
    const isAndroid = userAgent.includes("Android");
    const isWebOS = userAgent.includes("webOS");

    // Выполняем редирект в зависимости от типа устройства
    if (isIPad || isIPhone || isIPod || isAndroid) {
      console.log("isAndroid" )
    } else if (isWebOS) {
      console.log("isWebOS")
    } else {
      console.log("web")
    }
  }, []);
  return (
    <Routes>
      <Route path='/' element={<>gfdg</>}/>
      <Route path='map' element={<Map/>}/>
      <Route path='room'>
        <Route path='secret' element={<Secret/>}/>
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
