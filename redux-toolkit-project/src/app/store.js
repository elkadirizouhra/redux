import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/Cake/cakeSlice";
import userReducer from "../features/User/userFetch";
import iceCreamReducer from "../features/IceCream/IceCreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});
export default store;
