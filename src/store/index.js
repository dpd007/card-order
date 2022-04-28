import { configureStore } from "@reduxjs/toolkit";
import CardListSlice from "./CardListSlice";
const store = configureStore({
  reducer: {
    cardList: CardListSlice,
  },
});
export default store;
