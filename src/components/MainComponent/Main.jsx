import React, { useEffect, useState, useCallback } from "react";
import Header  from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import styles from  './Main.module.scss';
import {INITIALURL} from '../../constants';
import { useSelector, useDispatch  } from "react-redux";
import {setCharacters} from '../../reducers/characterSlices' 

const Main = () =>{

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const {nextPage, charactersToShow } = useSelector(state => state.characters)


    const setElementsOnScrenn = useCallback(({page}) =>{
      const payload = {
        next : "",
        results: [] 
      }
      payload.next = page.info.next
      payload.results = page.results
      dispatch(setCharacters(payload))
      setIsLoading(false);
    },[dispatch])

    const fetchRickAndMortyApi = useCallback((url,search)=>{
      fetch(url)
      .then((response) => response.json())
      .then((page) => {
        if(!search){
          setElementsOnScrenn({page})
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    },[setElementsOnScrenn])

    useEffect((()=>{
        fetchRickAndMortyApi(INITIALURL)
    }),[fetchRickAndMortyApi])

    return(
      <section className={styles.mainPage}>
          <Header className={styles.headerContainer}/>
          <Body charactersToShow={charactersToShow} nextPage={nextPage} fetchRickAndMortyApi={fetchRickAndMortyApi}/>
      </section>
    )
}

export default Main