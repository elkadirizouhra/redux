const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/Cake/cakeSlice");
const userReducer = require("../features/User/userFetch");
const createLogger = require("redux-logger");
// const logger =createLogger.createLogger();
const iceCreamReducer = require("../features/IceCream/IceCreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
});
module.exports = store;
