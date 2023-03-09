import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Main.module.scss';
import {  useDispatch  } from "react-redux";
import {addCharacterToSpace} from '../../reducers/characterSlices' 

const CharacterModal = ({character, showForm}) => {
    const dispatch = useDispatch();

    const sendToSpace = () =>{
        const payload = {
            character : character
        }
        dispatch(addCharacterToSpace(payload))
    }

  return (
    <Modal 
        show={character} 
        onHide={showForm}
    >
        <Modal.Header closeButton>
            <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.bodyCard}>
            <img 
                src= {character.image}
                alt= {character.name}
            />
            <ul>
                <li>Status: {character.status}</li>
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Episode: {character.episode.length}</li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={showForm}>
            Close
            </Button>
            <Button variant="primary" className={style.principal} onClick={()=>{
                showForm()
                sendToSpace()
            }}>
            Add to my Tripulation
            </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default CharacterModal;