export const reducerSample = (state = [], action) => {
    switch (action.type) {
        case "@getCharacters":
            console.log("add all characters")
        case "@addCharacterToSpacecraft":
            console.log("add character to spacecraft")
        case "@deleteCharacterToSpacecraft":
            console.log("delete from my spacecraft")
        default:
            return state;
    }
};