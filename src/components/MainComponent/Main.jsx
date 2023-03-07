import React from "react";
import Header  from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import styles from  './Main.module.scss';

const Main = () =>{

    return(
        <section className={styles.mainPage}>
            <Header className={styles.headerContainer}/>
            <Body/>
        </section>
    )
}

export default Main