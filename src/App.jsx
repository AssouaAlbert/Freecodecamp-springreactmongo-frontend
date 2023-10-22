import "./App.css";
import api from "./api/axiosConfig.js";
import { useState, useEffect } from "react";

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
  return <></>;
}

export default App;
