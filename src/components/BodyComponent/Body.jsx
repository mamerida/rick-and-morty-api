import React, { useEffect, useState } from "react";
import styles from "./Body.module.scss"
import CharacterCard from "../CharacterCard/CharacterCard";
import PlusButton from "../CharacterCard/PlusButton";
import CharacterModal from "../ModalCharacter/ModalCharacter";

const Body = ({charactersToShow,...props}) =>{
    const [characterToShow, setCharacterToShow] = useState([])
    const [characterSelected, setCharacterSelected] = useState(null)

    useEffect(()=>{
        if(charactersToShow){
            setCharacterToShow(charactersToShow)
        }    
    },[charactersToShow])

    return(
        <>
        {characterSelected && <CharacterModal character={characterSelected} showForm={()=>{
                setCharacterSelected(null)
        }}/>}  
        <section className={styles.charactersGrid}>
            {characterToShow && characterToShow.map((character)=>{
                return <CharacterCard 
                            characterData={character} 
                            key={character.id}
                            onClick={()=>{
                                setCharacterSelected(character)
                            }} 
                        />
            })}
            <PlusButton {...props}/>
        </section>
        </>
    )
}

export default Body