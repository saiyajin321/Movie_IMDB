const initialState = { movies : [], movie : [], access_token : ''}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case "loginSuccess":
            return {
                ...state,
                access_token : action.payload
            }
        case "fetchMoviesSuccess" :
            return {
                ...state,
                movies : action.payload
            }
        default:
            return state;
    }
}