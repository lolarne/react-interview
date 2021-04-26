import './card.scss';

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
                <p>Likes: {movie.likes}</p>
                <p>Dislikes: {movie.dislikes}</p>
                <div className="gauge">
                    <div style={{ width: score() }} id="colored"></div>
                </div>
            </div>

        </div>
    )
}

export default Card;