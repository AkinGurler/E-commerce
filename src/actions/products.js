import { fetchFromAPI } from "../utils/fetchData";

export const getTechnologicalProducts=()=>async(dispatch)=>{
    try {
        console.log("action calısti")
        const data=await fetchFromAPI(`item_search?q=technological`)
        const products=data.result.resultList;
        console.log("actionproducts",products)
        dispatch ({
            type:"GET_TECHNOLOGICAL_PRODUCTS",
            payload:products
        })
    } catch (error) {
        console.log(error)
    }
}