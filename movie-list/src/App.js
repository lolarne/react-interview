import './App.scss';
import Filter from './components/filter/Filter.jsx';
import Card from './components/card/Card.jsx';
import { movies } from './components/movies.js';
import { useEffect, useState } from 'react';

function App() {
  const [movieList, setMovieList] = useState([...movies]);
  const [displayNbr, setDisplayNbr] = useState(undefined);
  const [n, setN] = useState(0);
  const [y, setY] = useState(displayNbr);
  const paginationNbr = [4, 8, 12];
  const [dropDown, setDropDown] = useState(false);

  const renderOptions = (options) => {
    const list = [];
    for (const [key, value] of Object.entries(options)) {
      list.push(
        <li key={key}
          onClick={() => {
            setY(value);
            setDisplayNbr(value);
            setDropDown(false);
          }}>{value}</li>
      );
    }
    return list;
  };

  useEffect(() => {
    const paginationList = movies.slice(n, y);
    setMovieList(paginationList);
  }, [n, y]);

  return (
    <div className="App">
      <h1>MY MOVIE LIST</h1>
      <div className='pagination'>
        <Filter movies={movies} list={movieList} setList={setMovieList} />
        <div className="secondContainer">
          <div className="formSelectContainer">
            <div className={`formSelect ${dropDown ? "open" : ""}`}>
              <label>Affichage par page</label>
              <input
                type="button"
                value={displayNbr ? displayNbr : "Sélectionner un nombre  ▾"}
                onClick={() => setDropDown(!dropDown)}
              />
            </div>
            {dropDown &&
              <ul className="selectOptions">
                <li onClick={() => { setY(undefined); setDisplayNbr(undefined); setDropDown(false) }}>Tout</li>
                {renderOptions(paginationNbr)}
              </ul>
            }
          </div>
          <div className='btnContainer'>
            <button onClick={() => { setN(n - displayNbr); setY(y - displayNbr) }} className={n === 0 ? 'noDisplay' : ''}>Précédent</button>
            <button onClick={() => { setN(n + displayNbr); setY(y + displayNbr) }} className={(y >= movies.length - 1 || y === undefined) ? 'noDisplay' : ''}>Suivant</button>
          </div>
        </div>

      </div>
      <div className="cardsContainer">
        <div className='cards'>
          {movieList.map((movie, movieIndex) => <Card key={movieIndex} movie={movie} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
