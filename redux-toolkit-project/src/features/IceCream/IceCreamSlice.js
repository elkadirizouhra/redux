import { createSlice } from "@reduxjs/toolkit";
// import { cake, CakeActions } from "../Cake/cakeSlice";
import { ordered as cakeOrdered } from "../Cake/cakeSlice";
const initialState = {
  numsOfIceCream: 10,
};
const IceCreamSlice = createSlice({
  name: "IceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numsOfIceCream--;
    },
    restoked: (state, action) => {
      state.numsOfIceCream += action.payload;
    },
  },
  //   extraReducer: {
  //     ['cake/ordered']: (state) => {
  //       state.numsOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numsOfIceCream--;
    });
  },
});
export default IceCreamSlice.reducer;
export const { ordered, restoked } = IceCreamSlice.actions;
