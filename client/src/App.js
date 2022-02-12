import "./App.css";

import { useState } from "react";

import SearchBar from "./components/SearchBar";
import MovieInfo from "./components/MovieInfo";

function App() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovie = async (title) => {
    setIsLoading(true);
    setHasError(false);
    let response = await fetch(`/api/id/${title}`);
    let data = await response.json();
    if (data.error_message) {
      setHasError(true);
      setIsLoading(false);
      throw new Error(data.error_message);
    } else {
      const id = data.imdb_id;
      response = await fetch(`/api/${id}`);
      data = await response.json();
      if (data.error_message) {
        setHasError(true);
        setIsLoading(false);
        throw new Error(data.error_message);
      }
      setCurrentMovie(data);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearchMovie={fetchMovie.bind(this)} />
      {isLoading && <div className="loader"></div>}
      {(currentMovie || hasError) && (
        <MovieInfo movieToShow={currentMovie} hasError={hasError} />
      )}
    </div>
  );
}

export default App;
