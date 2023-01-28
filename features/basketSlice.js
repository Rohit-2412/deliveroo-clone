import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (state, action) => {

            // find the item to be removed
            const item = state.items.findIndex((item) => item.id === action.payload.id)

            // if item fodund
            if (item >= 0) {
                // create a copy of original basket
                const newBasket = [...state.items]

                // remove the item from the basket
                newBasket.splice(item, 1)

                // update the state
                state.items = newBasket
            } else {
                console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in basket!`)
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemWithId = (state, id) =>
    state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
    state.basket.items.reduce((total, item) => total += item.price, 0)

export default basketSlice.reducer