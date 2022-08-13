import {configureStore} from "@reduxjs/toolkit"
import ConnexionReducer from "../features/BearerToken/ConnexionSlice"
import CoursesReducer from "../features/BearerToken/CoursesSlice"
import headerAsyncReducer from "../features/BearerToken/HeaderAsyncSlice"
import headerReducer from "../features/BearerToken/HeaderSlice"
import NavBarReducer from "../features/BearerToken/NavBarSlice"
import UserReducer from "../features/BearerToken/UserSlice"
import UsersReducer from "../features/BearerToken/UsersSlices"
const store = configureStore({
    reducer : {
        header : headerReducer,
        headerAsync : headerAsyncReducer,
        connexion : ConnexionReducer,
        navBar : NavBarReducer,
        courses : CoursesReducer,
        user : UserReducer,
        users : UsersReducer
    }
})
export default store