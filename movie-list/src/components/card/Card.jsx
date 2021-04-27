import { useEffect, useState } from 'react';
import './card.scss';
import like from '../../images/like-icon.png';
import dislike from '../../images/dislike-icon.png';

const Card = ({ movie }) => {
    const [displayed, setDisplayed] = useState(true);
    const [likes, setLikes] = useState(movie.likes);
    const [dislikes, setDislikes] = useState(movie.dislikes);
    const [clicked, setClickled] = useState({
        like: false,
        dislike: false
    });

    const score = () => {
        const totalVote = likes + dislikes;
        return 100 * likes / totalVote + '%';
    }

    const likeClicked = () => {
        if (!clicked.like) {
            setClickled({ ...clicked, like: true, dislike: false });
        }
    }

    const dislikeClicked = () => {
        if (!clicked.dislike) {
            setClickled({ ...clicked, like: false, dislike: true });
        }
    }

    useEffect(() => {
        if (clicked.like) {
            setLikes(likes + 1);
            setDislikes(movie.dislikes)
        };
        if (clicked.dislike) {
            setDislikes(dislikes + 1);
            setLikes(movie.likes)
        };
    }, [clicked])

    return (
        <div className={displayed ? 'card' : 'hidden'}>
            <div className='frontSide'>
                <h1>{movie.title}</h1>
                <p>{movie.category}</p>
            </div>

            <div className='backSide'>
                <div className='like'>
                    <p>
                        <img src={like} alt="likes" onClick={() => likeClicked()} className={clicked.like ? 'clicked' : ''} />
                        {likes}
                    </p>
                    <p>
                        <img src={dislike} alt="dislikes" onClick={() => dislikeClicked()} className={clicked.dislike ? 'clicked' : ''} />
                        {dislikes}
                    </p>
                </div>
                <div className="gauge">
                    <div style={{ width: score() }} id="colored"></div>
                </div>
                <div className="deleteBtn">
                    <button onClick={() => setDisplayed(false)}>X</button>
                </div>

            </div>
        </div>
    )
}

export default Card;