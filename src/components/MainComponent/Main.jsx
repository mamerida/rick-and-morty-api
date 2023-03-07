import React, { useEffect, useState } from "react";
import Header  from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import styles from  './Main.module.scss';
import {getCharacterPage} from '../../networking/networkingApi';
import {INITIALURL} from '../../constants';

const Main = () =>{

    const [infoPage, setInfoPage] = useState({})

    const handleSetInfoPage = (element) =>{
        setInfoPage(element)
    }

    useEffect((() =>{
        const fetchData = async() => {
            const data = await getCharacterPage(INITIALURL)
            handleSetInfoPage(data)
        }
        fetchData()  
    }),[])

    return(
        <section className={styles.mainPage}>
            <Header className={styles.headerContainer}/>
            <Body charactersToShow={infoPage.results} />
        </section>
    )
}

export default Main