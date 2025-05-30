import { createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  id: number;
  img: string | any;
  name: string;
  category: string | any;
  price: number;
  quantity: number;
}
export interface ICartItem extends IProduct {}

export interface ICartState {
  items: ICartItem[];
}
const localStorageGetItems = (): ICartItem[] | undefined => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("cart");
    const parseData = data ? JSON.parse(data) : [];
    return parseData;
  }
};

const localStorageSetItems = (items: ICartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

const initialState: ICartState = {
  items: localStorageGetItems() || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: any) {
      const newItem = action.payload;
      const item = state.items.find((i) => i.id === newItem.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      localStorageSetItems(state.items);
    },
    incrementQuantity(state, action: any) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      localStorageSetItems(state.items);
    },
    decrementQuantity(state, action: any) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      localStorageSetItems(state.items);
    },
    removeFromCart(state, action: any) {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
      localStorageSetItems(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      localStorageSetItems([]);
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
