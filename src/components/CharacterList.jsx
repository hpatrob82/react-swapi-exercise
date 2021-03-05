
import { Link } from 'react-router-dom';

const CharacterList = ({characters}) => {
    
    console.log(characters);
    return (
        <>
        {characters.map((character, index) => (
            <Link to={`/character/${index}`}>
            <h2 key={index}>{character.name}

            </h2>
            </Link>
         ) )}
       </> 
    )
}

export default CharacterList;