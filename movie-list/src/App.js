import './App.scss';
import Card from './components/card/Card.jsx';
import {movies} from './components/movies.js';

function App() {
  return (
    <div className="App">
      <div className="cards">
        {movies.map((movie, movieIndex)=> <Card key={movieIndex} movie={movie} />)}
      </div>
      
    </div>
  );
}

export default App;
