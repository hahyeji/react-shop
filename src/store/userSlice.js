import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 30 },
  reducers: {
    changeName(state, a) {
      state.name = `변경 ${a.payload}`;
    },
    setAge(state, a) {
      state.age += a.payload;
    },
  },
});

export let { changeName, setAge } = user.actions;

export default user;
