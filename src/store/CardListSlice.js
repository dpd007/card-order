import { createSlice } from "@reduxjs/toolkit";
const initialCardState = [
  {
    id: 1,
    name: "food card",
    description: "This card is used for spending on Food merchants",
    final_price: 21,
    original_price: 30,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png",
    addToCart: false,
    addToCartCount: 0,
  },
  {
    id: 2,
    name: "travel card",
    description: "This card is used for spending on Travel and hotel bookings",
    final_price: 20,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
    addToCart: false,
    addToCartCount: 0,
  },
  {
    id: 3,
    name: "epic card",
    description: "Use this card and get benefits on every transaction",
    final_price: 40,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
    addToCart: false,
    addToCartCount: 0,
  },
  {
    id: 4,
    name: "happay premium card",
    description: "Use this card and get benefits on every transaction",
    final_price: 40,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
    addToCart: false,
    addToCartCount: 0,
  },
];
const CardListSlice = createSlice({
  name: "cardList",
  initialState: initialCardState,
  reducers: {
    add(state, action) {
      let itemId = action.payload;
      state.forEach((item) => {
        if (item.id === itemId) {
          item.addToCart = true;
          item.addToCartCount++;
        }
      });
    },
    remove(state) {
      if (state.addToCart === true && state.addToCartCount > 0) {
        state.addToCartCount--;
      }
    },
  },
});
export const cardListActions = CardListSlice.actions;
export default CardListSlice.reducer;
