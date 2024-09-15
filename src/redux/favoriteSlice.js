import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let favorites = localStorage.getItem("favorite");
    if (favorites) {
        return JSON.parse(favorites);
    } else {
        return [];
    }
};

const storeInLocalStorage = (data) => {
    localStorage.setItem("favorite", JSON.stringify(data));
};

const initialState = {
    favorites: fetchFromLocalStorage(),
    favoriteCount: 0,
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const isItemInFavorites = state.favorites.find(item => item.id === action.payload.id);
            if (isItemInFavorites) {
                state.favorites = state.favorites.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            } else {
                state.favorites.push(action.payload);
            }
            state.favoriteCount = state.favorites.length;
            storeInLocalStorage(state.favorites);
        },
        getFavoriteTotal: (state) => {
            state.favoriteCount = state.favorites.length;
        },
        removeFromFavorite: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
            state.favoriteCount = state.favorites.length;
            storeInLocalStorage(state.favorites);
        },
    },
});

export const { addToFavorite, getFavoriteTotal, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;