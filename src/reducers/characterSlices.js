import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nextPage:"",
    charactersToShow : [],
    charactersInSpace : [] 
}

export const characterSlices = createSlice({
    name: 'characterList',
    initialState: initialState,
    reducers : {
        setCharacters : (state, action) => {
            state.nextPage = action.payload.next;
            state.charactersToShow = state.charactersToShow.concat(action.payload.results)
        },
        addCharacterToSpace : (state, action) => {
            state.charactersInSpace = state.charactersInSpace.append(action.payload.characterInSpace);
        },

    }
})

export const {setCharacters, addCharacterToSpace} = characterSlices.actions

export default characterSlices.reducer


