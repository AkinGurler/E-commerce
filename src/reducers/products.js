export const initialState = {
    homePageProducts: [],
    selectedProduct:[],
    card:[],
    profile:{infos:[],address:"",orders:[]},
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_TECHNOLOGICAL_PRODUCTS":
            return {
                ...state, homePageProducts: action.payload
            }
        case "GET_SEARCHED_PRODUCTS":
            return{
                ...state,homePageProducts: action.payload
            }
        case "GET_SELECTED_PRODUCT":
            return{
                ...state,selectedProduct:action.payload
            }
        case "ADD_CARD":
            return{
                ...state,
                card:[...state.card,action.payload]/* sepettekiler kalsın bide geleni ekleyelim */
            }
        case "DELETE_FROM_CARD":
           
                return{
                    ...state,
                    card:state.card.filter((item)=>item.itemId!==action.payload)
                }
        case "COMPLETE_SHOPPING":
            return{
                ...state,
                profile:{...state.profile,
                         orders:[...state.profile.orders,...action.payload]
                        },
                card:[]
            }
        default:
            return state
    }

}

export default reducer