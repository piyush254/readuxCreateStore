import { combineReducers, createStore } from "redux";
import { productList } from "./ProductList";
import {
  ADDITEM,
  DECREASEBYONE,
  INCREASEITEMQUANTITY,
  REMOVEITEM,
} from "./cartReducer";
import wishlistREducer, {
  WISHLISTADDITEM,
  WISHLISTREMOVEITEM,
} from "./wishListReducer";
import cartReducer from "./cartReducer";
import productReducer from "./ProductReducer";
let initilState = {
  products: productList,
  cartItems: [],
  wishlist: [],
};
/*
const ADDITEM = "store/addItem";
const REMOVEITEM = "store/removeItem";
const INCREASEITEMQUANTITY = "store/increaseItemQuantity";
const DECREASEBYONE = "store/decreasebyOne";
const WISHLISTADDITEM = "store/wishListaddItem";
const WISHLISTREMOVEITEM = "store/wishListremoveItem";

function reducer(state = initilState, action) {
  console.log(state);
  switch (action.type) {
    case ADDITEM:
      return { ...state, cartItems: [...state.cartItems, action.payLoad] };
    case REMOVEITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId != action.payLoad.productId
        ),
      };
    case INCREASEITEMQUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId == action.payLoad.productId) {
            return {
              ...item,
              quantity: item.quantity + action.payLoad.quantity,
            };
          }
          return item;
        }),
      };
    case DECREASEBYONE:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.productId == action.payLoad.productId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((cartItem) => cartItem.quantity > 0),
      };
    case WISHLISTADDITEM:
      return { ...state, wishlist: [...state.wishlist, action.payLoad] };
    case WISHLISTREMOVEITEM:
      return {
        ...state,
        wishlist: state.wishlist.filter((wishlist) => {
          return wishlist.productId != action.payLoad.productId;
        }),
      };
    default:
      return state;
  }
}

*/

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  wishlist: wishlistREducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({ type: ADDITEM, payLoad: { productId: 1, quantity: 12 } });
store.dispatch({ type: ADDITEM, payLoad: { productId: 12, quantity: 2 } });
store.dispatch({ type: ADDITEM, payLoad: { productId: 15, quantity: 2 } });
store.dispatch({ type: REMOVEITEM, payLoad: { productId: 6 } });
store.dispatch({
  type: INCREASEITEMQUANTITY,
  payLoad: { productId: 12, quantity: 50 },
});
store.dispatch({ type: DECREASEBYONE, payLoad: { productId: 12 } });
store.dispatch({ type: WISHLISTADDITEM, payLoad: { productId: 12 } });
store.dispatch({ type: WISHLISTADDITEM, payLoad: { productId: 15 } });
store.dispatch({ type: WISHLISTADDITEM, payLoad: { productId: 17 } });
store.dispatch({ type: WISHLISTREMOVEITEM, payLoad: { productId: 12 } });

console.log(store.getState());
