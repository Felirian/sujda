import React from 'react';
import {Route, Routes} from "react-router-dom";
import First from "./pages/Rooms/First";
import Quiz from "./components/Shared/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>gfdg</>} />
      <Route path="room">
        <Route path="first">
          <Route index element={<First/>} />
          <Route path="quiz" element={<Quiz data={'jfdkfd'}/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;