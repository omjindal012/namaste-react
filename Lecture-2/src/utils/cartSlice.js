import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutate the state
      // In older version of vanilla redux we are not allowed to mutate the state and returning was mandatory
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      console.log(current(state));
      // state = []; // We cannot do like this because redux uses a library immer and here we are not modifying the state rather we are changing reference to it
      // state.items.length = 0;
      // OR return a new empty State
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
