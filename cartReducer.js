export const ADDITEM = "store/addItem";
export const REMOVEITEM = "store/removeItem";
export const INCREASEITEMQUANTITY = "store/increaseItemQuantity";
export const DECREASEBYONE = "store/decreasebyOne";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADDITEM:
      return [...state, action.payLoad];
    case REMOVEITEM:
      return state.filter((item) => item.productId != action.payLoad.productId);
    case INCREASEITEMQUANTITY:
      return state.map((item) => {
        if (item.productId == action.payLoad.productId) {
          return {
            ...item,
            quantity: item.quantity + action.payLoad.quantity,
          };
        }
        return item;
      });
    case DECREASEBYONE:
      return state
        .map((item) => {
          if (item.productId == action.payLoad.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    default:
      return state;
  }
}
