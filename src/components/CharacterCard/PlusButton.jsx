import styles from  './CharacterCard.module.scss';


const PlusButton = ({nextPage, fetchRickAndMortyApi}) =>{

    const functionOnClick = () =>{
        fetchRickAndMortyApi(nextPage)
    }

    return(
        <div className={styles.cardBody} onClick={functionOnClick}> 
            <img 
                className={styles.ChrPhoto}
                alt= "more"
                src="/rickAndMortyLogo.webp"
            />
            <div className={styles.ChrName} >
                More Characters
            </div>
        </div>
    )
}

export default PlusButton