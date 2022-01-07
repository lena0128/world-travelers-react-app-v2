
const initialState = {
    cities: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CITY":
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }

        case "FETCH_CITIES":
            return {
                ...state, 
                cities: [...state.cities, action.payload]
            }    


        default:
            return state    

    }

}

export default cityReducer

// whatever the state returns is going to be the state
// the default returns the initial state