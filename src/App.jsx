import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api/axiosConfig.js";

import Layout from "./api/component/Layout.jsx";

import "./App.css";
import Home from "./api/component/home/Home.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
