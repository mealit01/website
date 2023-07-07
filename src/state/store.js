import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import PantryReducer from "./features/pantry/pantrySlice";
import ShoppingListReducer from "./features/shoppingList/shoppingListSlice";
import SearchReducer from "./features/search/searchSlice";
import RecipesReducer from "./features/recipes/recipesSlice";
import UserReducer from "./features/user/userSlice";
import PlannerReducer from "./features/planner/plannerSlice";

import { authApi } from "./features/auth/authService";
import { pantryApi } from "./features/pantry/pantryService";
import { shoppingListApi } from "./features/shoppingList/shoppingListService";
import { searchApi } from "./features/search/searchService";
import { recipesApi } from "./features/recipes/recipesService";
import { userService } from "./features/user/userService";
import { plannerApi } from "./features/planner/plannerService";

const store = configureStore({
    reducer: {
        auth: authReducer,
        pantry: PantryReducer,
        shoppingList: ShoppingListReducer,
        search: SearchReducer,
        recipes: RecipesReducer,
        user: UserReducer,
        planner: PlannerReducer,

        [authApi.reducerPath]: authApi.reducer,
        [pantryApi.reducerPath]: pantryApi.reducer,
        [shoppingListApi.reducerPath]: shoppingListApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
        [userService.reducerPath]: userService.reducer,
        [plannerApi.reducerPath]: plannerApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            authApi.middleware,
            pantryApi.middleware,
            shoppingListApi.middleware,
            searchApi.middleware,
            recipesApi.middleware,
            userService.middleware,
            plannerApi.middleware,
        ),
});

export default store;