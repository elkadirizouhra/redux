const store = require("./app/store");
// const { CakeActions } = require("./features/Cake/cakeSlice");
// const { IceCreamSliceActions } = require("./features/IceCream/IceCreamSlice");
const { fetchUser } = require("./features/User/userFetch");

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("UpdateState", store.getState());
});
store.dispatch(fetchUser());
// store.dispatch(CakeActions.ordered());
// store.dispatch(CakeActions.ordered());
// store.dispatch(CakeActions.ordered());
// store.dispatch(CakeActions.restoked(2));
// store.dispatch(IceCreamSliceActions.ordered());
// store.dispatch(IceCreamSliceActions.ordered());
// store.dispatch(IceCreamSliceActions.ordered());
// store.dispatch(IceCreamSliceActions.restoked(2));
unsubscribe();
