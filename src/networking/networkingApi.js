

export const getCharacterPage = async (url) =>{
    let response  = await fetch(url)
    let userData = await response.json();
    return userData
}