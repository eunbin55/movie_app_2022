import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
        <Routes>
          <Route path="/" exact={true} element={<Home />}/> 
          <Route path="/about" element={<About />} />
          <Route path="movie-detail" element={<Detail />} />
        </Routes>
    </HashRouter>
  )
}

/**
 * Route에 exact={true}를 하지 않아도 /about 접속 시 About 컴포넌트만 출력됨...
 */

export default App;