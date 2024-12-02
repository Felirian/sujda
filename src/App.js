import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Quiz from './pages/Quiz';
import Room from './pages/Room';
import Map from './pages/Map';
import Main from './pages/Main';
import {ROOMS_DATA} from './features/data';
import Secret from './pages/Secret';
import Museum from './pages/Museum';
import Exhibit from './pages/Exhibit';
import ModelViewer from './components/Exhibit/ModelViewer';
import Tutorial from './pages/Tutorial';
import {TUTORIAL_DATA} from './features/data_tutorial';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='tutorial' element={<Tutorial data={TUTORIAL_DATA}/>}/>
      <Route path='map' element={<Map/>}/>
      <Route path='museum' element={<Museum/>}/>
      <Route path='room'>
        <Route path='secret' element={<Secret/>}/>
        {ROOMS_DATA.map((roomData, index) => (
          <Route key={`${index}_rooms`} path={roomData.route}>
            <Route index element={<Room data={roomData}/>}/>
            <Route path='quiz' element={<Quiz data={roomData.quiz} quizTexts={roomData.quizTexts}/>}/>
            {roomData.exhibits.map((exhibit, index) => (
              <React.Fragment key={`${index}_exhibit`}>
                <Route path={exhibit.route} element={<Exhibit data={exhibit}/>}/>
                <Route
                  path={`${exhibit.route}/model`}
                  element={<ModelViewer model={exhibit.threejs}/>}
                />
              </React.Fragment>
            ))}
          </Route>
        ))}
      </Route>
    </Routes>
  );
}

export default App;
