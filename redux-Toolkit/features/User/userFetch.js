const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const createSlice = require("@reduxjs/toolkit").createSlice;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [], // Changed from "user" to "users" to match the array in initialState
  error: "",
};

// Async thunk for fetching users
const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data.map((user) => user.id);
  } catch (error) {
    throw Error(error.message);
  }
});

// Slice definition
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        console.log("Users fetched successfully:", action.payload); // Log successful fetch
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
        console.error("Error fetching users:", action.error.message); // Log the error
      });
  },
});

// Exporting reducer and actions
module.exports = userSlice.reducer;
module.exports.fetchUser = fetchUser;
