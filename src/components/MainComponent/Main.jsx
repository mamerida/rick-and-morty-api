import React, { useEffect, useState } from "react";
import Header  from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import styles from  './Main.module.scss';
import {INITIALURL} from '../../constants';

const Main = () =>{

    const [characterList, setCharacterList] = useState([])
    const [nextPage, setNextPage] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const getCharacterList = () =>{
        return characterList
    }

    const setElementsOnScrenn = ({page}) =>{
      setNextPage(page.info.next);
      let characterOnScreen = getCharacterList()
      characterOnScreen = characterOnScreen.concat(page.results)
      setCharacterList(characterOnScreen)
      setIsLoading(false);
    }

    const fetchRickAndMortyApi = async(url,search)  => {
        try {
          await fetch(url)
          .then((response) => response.json())
          .then((page) => {
            if(!search){
              setElementsOnScrenn({page})
            }
          })
        } catch (error) {
          console.log('Hubo un problema con la petición Fetch:' + error.message);
        }
    }

    useEffect((()=>{
        fetchRickAndMortyApi(INITIALURL)
    }),[])

    return(
        <section className={styles.mainPage}>
            <Header className={styles.headerContainer}/>
            <Body charactersToShow={characterList} nextPage={nextPage} fetchRickAndMortyApi={fetchRickAndMortyApi}/>
        </section>
    )
}

export default Main