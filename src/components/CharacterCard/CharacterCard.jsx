import React from "react";
import styles from "./CharacterCard.module.scss";

const CharacterCard = ({characterData, ...props}) =>{

    return(
        <section className={styles.cardBody} {...props} >
            <img 
                className={styles.ChrPhoto}
                src= {characterData.image}
                alt= {characterData.name}
            />
            <div className={styles.ChrName}>{characterData.name}</div>
            <p>{characterData.status}</p>
        </section>
    )
}

export default CharacterCard