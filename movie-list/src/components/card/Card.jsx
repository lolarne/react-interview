import { useState } from 'react';
import './card.scss';
import like from '../../images/like.png';
import dislike from '../../images/dislike.png';


const Card = ({ movie }) => {
    const [displayed, setDisplayed] = useState(true);
    const [likes, setLikes] = useState(movie.likes);
    const [dislikes, setDislikes] = useState(movie.dislikes);
    // const [clicked, setClickled] = useState({
    //     like: false,
    //     dislike: false
    // });
    
    const score = () => {
        const totalVote = movie.likes + movie.dislikes;
        return 100 * movie.likes / totalVote + '%';
    }

    return (
        <div className={displayed ? 'card' : 'hidden'}>
            <div className='frontSide'>
                <h1>{movie.title}</h1>
                <p>{movie.category}</p>
            </div>

            <div className='backSide'>
                <div className='like'>
                    <p><img src={like} alt="likes" /> {likes}</p>
                    <p><img src={dislike} alt="dislikes"/> {dislikes}</p>
                </div>
                <div className="gauge">
                    <div style={{ width: score() }} id="colored"></div>
                </div>
                <div className="deleteBtn">
                    <button onClick={()=> setDisplayed(false)}>X</button>
                </div>
                
            </div>

        </div>
    )
}

export default Card;