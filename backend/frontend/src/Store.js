// import { createStore, combineReducers, applyMiddleware } from "redux";
// import {thunk} from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from "./reducers/productReducer";


// import {
//   allUsersReducer,
//   forgotPasswordReducer,
//     // allUsersReducer,
//     // forgotPasswordReducer,
//     profileReducer,
//     userDetailsReducer,
//     // userDetailsReducer,
//     userReducer,
//   } from "./reducers/userReducer";
// import { cartReducer } from "./reducers/cartReducer";
// import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";


// const reducer=combineReducers({
//  products: productsReducer,
//  productDetails: productDetailsReducer,
//  user: userReducer,
//  profile:profileReducer,
//  forgotPassword:forgotPasswordReducer,
//  cart:cartReducer,
//  newOrder: newOrderReducer,
//  myOrders: myOrdersReducer,
//  orderDetails: orderDetailsReducer,
//  newReview: newReviewReducer,
//  allOrders: allOrdersReducer,
//  order: orderReducer,
//  product: productReducer,
//  newProduct: newProductReducer,
// allUsers: allUsersReducer,
// userDetails: userDetailsReducer,
// productReviews: productReviewsReducer,
//   review: reviewReducer,
// });

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
// };
// const middleware=[thunk];

// const store=createStore(reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))

// );


// export default store;

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

// Combine all reducers
const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  product: productReducer,
  newProduct: newProductReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
});

// Initial state
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

// Create the store using `configureStore`
const store = configureStore({
  reducer, // Pass the combined reducer
  preloadedState: initialState, // Set initial state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Add thunk middleware
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools only in development
});

export default store;
