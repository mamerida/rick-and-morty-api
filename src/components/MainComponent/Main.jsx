import React, { useEffect, useState } from "react";
import Header  from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import styles from  './Main.module.scss';
import {INITIALURL} from '../../constants';

const Main = () =>{

    const [infoPage, setInfoPage] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const fetchExample = async()  => {
        try {
          await fetch('https://rickandmortyapi.com/api/character')
          .then((response) => response.json())
          .then((page) => {
            setInfoPage(page); // ⬅️ Guardar datos
            setIsLoading(false)
          })
        } catch (error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    }

    useEffect((()=>{
        fetchExample()
    }),[])

    return(
        <section className={styles.mainPage}>
            <Header className={styles.headerContainer}/>
            <Body charactersToShow={infoPage.results} />
        </section>
    )
}

export default Main