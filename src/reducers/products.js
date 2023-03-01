export const initialState = {
    products: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_TECHNOLOGICAL_PRODUCTS":
            console.log(action.payload)
            return {
                
                ...state, products: action.payload
            }
        default:
            return state
    }

}

export default reducer