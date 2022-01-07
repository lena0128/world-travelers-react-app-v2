
const initialState = {
    cities: [],
    loading: false
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                loading: true
            }

        case "ADD_CITY":
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }

        case "FETCH_CITIES":
            return {
                ...state, 
                cities: [...state.cities, ...action.payload],
                loading: false
            }    


        default:
            return state    

    }

}

export default cityReducer

// whatever the state returns is going to be the state
// the default returns the initial state

// how do we pass the actions to the reducer?
// we need dispatch that take in an action and it allows us to access the reducer

// The FLow is:
// we build our action
// we dispacth the action to the reducer
// the reducer returns the state 