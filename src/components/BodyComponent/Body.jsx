import React, { useEffect, useState } from "react";
import styles from "./Body.module.scss"
import CharacterCard from "../CharacterCard/CharacterCard";

const Body = ({charactersToShow}) =>{
    const [characterToShow, setCharacterToShow] = useState([])

    useEffect(()=>{
        setCharacterToShow(charactersToShow)
    },[])

    return(
        <section className={styles.charactersGrid}>
            {characterToShow && characterToShow.map((character)=>{
                return <CharacterCard characterData={character} key={character.id} />
            })}
        </section>
    )
}

export default Body