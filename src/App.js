import React from 'react';
import {Route, Routes} from "react-router-dom";
import First from "./pages/Rooms/First";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>gfdg</>} />
      <Route path="room" >
        <Route path="first" >
          <Route index element={<First/>} />
          <Route path="quiz" element={<>quiz1</>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;