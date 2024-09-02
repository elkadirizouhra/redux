const { createSlice } = require("@reduxjs/toolkit");
const { cake, CakeActions } = require("../Cake/cakeSlice");

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
    builder.addCase(CakeActions.ordered, (state) => {
      state.numsOfIceCream--;
    });
  },
});
module.exports = IceCreamSlice.reducer;
module.exports.IceCreamSliceActions = IceCreamSlice.actions;
