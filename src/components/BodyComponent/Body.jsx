import React from "react";
import styles from "./Body.module.scss"
import CharacterCard from "../CharacterCard/CharacterCard";

const Body = () =>{
    return(
        <section className={styles.charactersGrid}>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
            <CharacterCard/>
        </section>
    )
}

export default Body