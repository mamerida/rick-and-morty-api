import React, { useEffect, useState } from "react";
import styles from "./Body.module.scss"
import CharacterCard from "../CharacterCard/CharacterCard";
import PlusButton from "../CharacterCard/PlusButton";

const Body = ({charactersToShow,...props}) =>{
    const [characterToShow, setCharacterToShow] = useState([])

    useEffect(()=>{
        if(charactersToShow){
            setCharacterToShow(charactersToShow)
        }    
    },[charactersToShow])

    return(
        <section className={styles.charactersGrid}>
            {characterToShow && characterToShow.map((character)=>{
                return <CharacterCard characterData={character} key={character.id} />
            })}
            <PlusButton {...props}/>
        </section>
    )
}

export default Body