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
    quantity: 0,
  },
  {
    id: 2,
    name: "travel card",
    description: "This card is used for spending on Travel and hotel bookings",
    final_price: 20,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png",
    addToCart: false,
    quantity: 0,
  },
  {
    id: 3,
    name: "epic card",
    description: "Use this card and get benefits on every transaction",
    final_price: 40,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png",
    addToCart: false,
    quantity: 0,
  },
  {
    id: 4,
    name: "happay premium card",
    description: "Use this card and get benefits on every transaction",
    final_price: 40,
    img_url:
      "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png",
    addToCart: false,
    quantity: 0,
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
          item.quantity++;
        }
      });
    },
    remove(state, action) {
      let itemId = action.payload;
      state.forEach((item) => {
        if (item.id === itemId) {
          if (item.addToCart === true && item.quantity > 0) {
            item.quantity--;
            if (item.quantity === 0) {
              item.addToCart = false;
            }
          }
        }
      });
    },
  },
});
export const cardListActions = CardListSlice.actions;
export default CardListSlice.reducer;
