import { useEffect, useState } from "react";
import './filter.scss';

const Filter = ({ movies, list, setList }) => {
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        if (!loaded) {
            const newCategories = [...categories];

            for (const movie of movies) {
                if (!newCategories.includes(movie.category)) {
                    newCategories.push(movie.category);
                }
            }
            setCategories(newCategories);
            setLoaded(true);
        }
    }, [loaded]);

    const renderOptions = (options) => {
        const list = [];
        for (const [key, value] of Object.entries(options)) {
            list.push(
                <li key={key}
                    onClick={() => {
                        if (!searchTerm.includes(value)) {
                            setSearchTerm([...searchTerm, value]);
                        }
                        setDropDown(false);
                    }}>{value}</li>
            );
        }
        return list;
    };

    const unselected = (categorySelected) => {
        let newCategories = [...searchTerm];
        newCategories = newCategories.filter(category => category !== categorySelected);

        setSearchTerm(newCategories);
    }

    useEffect(() => {
        if (searchTerm.length !== 0) {
            const newList = [];
            for (const movie of movies) {
                if (searchTerm.includes(movie.category)) {
                    newList.push(movie);
                }
            }
            setList(newList);
        } else {
            setList(movies)
        }
    }, [searchTerm]);



    return (
        <div className='filter'>
            <div className="formSelectContainer">
                <div className={`formSelect ${dropDown ? "open" : ""}`}>
                    <label className="dropdown">Recherche</label>
                    <input
                        type="button"
                        value="Sélectionner une catégorie  ▾"
                        onChange={(e) => setSearchTerm([...searchTerm, e.target.value])}
                        onClick={() => setDropDown(!dropDown)}
                    />
                </div>
                {dropDown &&
                    <ul className="selectOptions">
                        {renderOptions(categories)}
                    </ul>
                }
            </div>
            <div>
                {searchTerm.map((category, categoryIndex) => (
                    <button onClick={() => unselected(category)} key={categoryIndex}>{category}  X</button>
                ))}
            </div>
        </div>
    )
}

export default Filter;