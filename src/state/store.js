import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import PantryReducer from "./features/pantry/pantrySlice";
import ShoppingListReducer from "./features/shoppingList/shoppingListSlice";
import SearchReducer from "./features/search/searchSlice";

import { authApi } from "./features/auth/authService";
import { pantryApi } from "./features/pantry/pantryService";
import { shoppingListApi } from "./features/shoppingList/shoppingListService";
import { searchApi } from "./features/search/searchService";

const store = configureStore({
    reducer: {
        auth: authReducer,
        pantry: PantryReducer,
        shoppingList: ShoppingListReducer,
        search: SearchReducer,
        [authApi.reducerPath]: authApi.reducer,
        [pantryApi.reducerPath]: pantryApi.reducer,
        [shoppingListApi.reducerPath]: shoppingListApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            authApi.middleware,
            pantryApi.middleware,
            shoppingListApi.middleware,
            searchApi.middleware
        ),
});

export default store;