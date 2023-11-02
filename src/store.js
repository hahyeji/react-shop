import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    setCount(state, i) {
      state.forEach((ele, idx) => {
        if (ele.id == i.payload) ele.count += 1;
      });
    },
    inputData(state, data) {
      let imsi = {
        id: state.length,
        name: data.payload.title,
        count: 1,
      };
      state.push(imsi);

      console.log("state");
      console.log(state);
      console.log("data");
      console.log(data);
      console.log("imsi");
      console.log(imsi);
    },
  },
});

export let { setCount, inputData } = cart.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
    stock: stock.reducer,
  },
});
