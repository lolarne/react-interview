import './card.scss';
import like from '../../images/like.png';
import dislike from '../../images/dislike.png';

const Card = ({ movie }) => {
    const score = () => {
        const totalVote = movie.likes + movie.dislikes;
        return 100 * movie.likes / totalVote + '%';
    }

    return (
        <div className='card'>
            <div className='frontSide'>
                <h1>{movie.title}</h1>
                <p>{movie.category}</p>
            </div>

            <div className='backSide'>
                <div className='like'>
                    <p><img src={like} alt="likes" /> {movie.likes}</p>
                    <p><img src={dislike} alt="dislikes" /> {movie.dislikes}</p>
                </div>
                <div className="gauge">
                    <div style={{ width: score() }} id="colored"></div>
                </div>
            </div>

        </div>
    )
}

export default Card;