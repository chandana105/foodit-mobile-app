import {PayloadAction, createSlice} from '@reduxjs/toolkit';

// interface CartInitialState {
//   resId: string;
//   cartItems :
// }

/**
// cartInfo: {
//     resId: '324765',
//     restaurantName: 'Pizza Hut',
//     items: [
    {"card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
    "info": {
      "id": "125166339",
      "name": "2 Allo Tikki Burger And Spring Rolls And Noodles With Fruit Beer",
      "category": "Combos",
      "description": "2 allo tikki burger and spring rolls and noodles with fruit beer",
      "imageId": "4d70276d68d7059dd0dcc2ed47ab1266",
      "inStock": 1,
      "isVeg": 1,
      "price": 27500,
      "variants": {},
      "variantsV2": {},
      "itemAttribute": {
        "vegClassifier": "VEG"
      },
      "ribbon": {
        "text": "Bestseller",
        "textColor": "#ffffff",
        "topBackgroundColor": "#d53d4c",
        "bottomBackgroundColor": "#b02331"
      },
      "showImage": true,
      "itemBadge": {},
      "badgesV2": {},
      "isBestseller": true,
      "ratings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "372 ratings",
          "ratingCountV2": "372"
        }
      }
    },
    "analytics": {},
    "hideRestaurantDetails": true
  }
}

},
    {}
],
//   },
 */

const initialState: any = {
  // when added cart for particualr res's will be added
  resId: '',
  restaurantName: '',
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{resId: string; item: any}>) => {
      const {resId, item} = action.payload;
      if (state.resId && state.resId !== resId) {
        // Logic to handle different restaurant items will go here
        // Do not add the item directly if the restaurant ID is different
        return;
      }
      state.resId = resId;
      state.items.push(item);
    },
  },
});

export const {addItem} = cartSlice.actions;

export default cartSlice.reducer;
