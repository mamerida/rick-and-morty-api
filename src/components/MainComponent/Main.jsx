import React, { useEffect, useState } from "react";
import Header  from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import styles from  './Main.module.scss';
import {INITIALURL} from '../../constants';
import { useSelector, useDispatch  } from "react-redux";
import {setCharacters} from '../../reducers/characterSlices' 

const Main = () =>{

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const {nextPage, charactersToShow} = useSelector(state => state.characters)

    const setElementsOnScrenn = ({page}) =>{
      const payload = {
        next : "",
        results: [] 
      }
      payload.next = page.info.next
      payload.results = page.results
      dispatch(setCharacters(payload))
      setIsLoading(false);
    }

    const fetchRickAndMortyApi = (url,search)  => {
        try {
          fetch(url)
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
          <Body charactersToShow={charactersToShow} nextPage={nextPage} fetchRickAndMortyApi={fetchRickAndMortyApi}/>
      </section>
    )
}

export default Main