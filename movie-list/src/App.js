import './App.scss';
import Filter from './components/filter/Filter.jsx';
import Card from './components/card/Card.jsx';
import {movies} from './components/movies.js';
import { useState } from 'react';

function App() {
  const [movieList, setMovieList] = useState([...movies]);


  return (
    <div className="App">
      <Filter movies={movies} list={movieList} setList={setMovieList} />
      <div className="cards">
        {movieList.map((movie, movieIndex)=> <Card key={movieIndex} movie={movie} />)}
      </div>
    </div>
  );
}

export default App;
