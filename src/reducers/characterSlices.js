import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nextPage:"",
    charactersToShow : [],
    charactersInSpace : [] 
}

const sendCharacterToSpace = ({state,action}) =>{
    state.charactersToShow = state.charactersToShow.filter(character => character.id !== action.payload.character.id )
    state.charactersInSpace.push(action.payload.character)
}

export const characterSlices = createSlice({
    name: 'characterList',
    initialState: initialState,
    reducers : {
        setCharacters : (state, action) => {
            state.nextPage = action.payload.next;
            state.charactersToShow = state.charactersToShow.concat(action.payload.results)
            state.charactersInSpace = []
        },
        addCharacterToSpace : (state, action) => {
            sendCharacterToSpace({state, action})
        },

    }
})

export const {setCharacters, addCharacterToSpace} = characterSlices.actions

export default characterSlices.reducer


