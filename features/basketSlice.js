import { createSlice } from "@reduxjs/toolkit";


export const basketSlice = createSlice({
    name: "basket",
    initialState:{
        items: []
    },
    reducers:{
        addToBasket: (state, action) =>{
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) =>{
            const index = state.items.findIndex((item) => item.id === action.payload.id)

            let newItems = [...state.items]

            if(index >= 0){
                newItems.splice(index, 1)
            }else{
                console.warn(`Can't remove producr {id: ${action.payload.id}} as it's not in basket!`)
            }
            state.items = newItems
        }
    }
})

export const { addToBasket, removeFromBasket} = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export const selectBasketItemsById = (state, id) => state.basket.items.filter((item)=>item.id === id)

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item)=> total += item.price, 0)

export default basketSlice.reducer