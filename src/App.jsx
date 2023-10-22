import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./api/axiosConfig.js";

import Layout from "./api/component/Layout.js";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
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
        <Route path="/" element={<Layout/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
