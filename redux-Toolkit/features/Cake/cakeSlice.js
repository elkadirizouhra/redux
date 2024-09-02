const { createSlice } = require("@reduxjs/toolkit");

// Initial state for the cake slice
const initialState = {
  numsOfCakes: 10,
};

// Create the cake slice with reducers
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numsOfCakes--;
    },
    restoked: (state, action) => {
      state.numsOfCakes += action.payload;
    },
  },
});

// Export the reducer and actions
module.exports = cakeSlice.reducer;
module.exports.CakeActions = cakeSlice.actions;
