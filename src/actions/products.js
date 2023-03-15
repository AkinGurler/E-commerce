import { Action } from "@remix-run/router";
import { fetchFromAPI } from "../utils/fetchData";

export const getTechnologicalProducts = () => async (dispatch) => {
    try {
        const data = await fetchFromAPI(`item_search?q=new`)
        const products = data.result.resultList;
        dispatch({
            type: "GET_TECHNOLOGICAL_PRODUCTS",
            payload: products
        })
    } catch (error) {
        console.log(error)
    }
}

export const getSearchedProducts = (searchTerm) => async (dispatch) => {
    try {
        
        const data = await fetchFromAPI(`item_search?q=${searchTerm}`)
        const products = data.result.resultList;
    
        dispatch({
            type: "GET_SEARCHED_PRODUCTS",
            payload: products
        })


    } catch (error) {
        console.log(error)
    }
}

export const getSelectedProduct = (itemId) => async (dispatch) => {
    try {
        console.log("action ",itemId)
        const data = await fetchFromAPI(`item_detail?itemId=${itemId}`)
        const product= data.result.item;
        
        dispatch({
            type: "GET_SELECTED_PRODUCT",
            payload: product
        })
    } catch (error) {
        console.log(error)
    }
}

export const addCart=(item)=>async(dispatch)=>{
    try { 
        dispatch({
            type:"ADD_CARD",
            payload:item
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteFromCard=(itemId)=>async(dispatch)=>{
    try {
        dispatch({
            type:"DELETE_FROM_CARD",
            payload:itemId
        })
    } catch (error) {
        console.log(error)        
    }

}


export const completeShopping=(card)=>async(dispatch)=>{
    try {
        console.log("biten alışveris sepeti",card)
        dispatch({
            type:"COMPLETE_SHOPPING",
            payload:card
        })
    } catch (error) {
        
    }
}
