import './Card.css';
import silhouette from '../../assets/images/Silhouette.svg';

function Card(props) {
    return (
        <div className='Card'>
            <small>#{props.pokeId}</small>
            <img src={silhouette}></img>
            <p>{props.pokeName}</p>
            <div></div>
        </div>
    )
}

export default Card;