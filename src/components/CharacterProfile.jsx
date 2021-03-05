import { useParams } from 'react-router-dom';

const CharacterProfile = ({characters}) => {
    const { index } = useParams();
    console.log('index', index)
    const character=characters[index];
    console.log(character)

return (
    <>
    <h1>{character.name}</h1>
    <h2>Height: {character.height}</h2>
    <h3>Created: {character.created}</h3>
    </>
)

}

export default CharacterProfile;