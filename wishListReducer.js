export const WISHLISTADDITEM = "store/wishListaddItem";
export const WISHLISTREMOVEITEM = "store/wishListremoveItem";

export default function wishlistREducer(state = [], action) {
  switch (action.type) {
    case WISHLISTADDITEM:
      return [...state, action.payLoad];
    case WISHLISTREMOVEITEM:
      return state.filter((wishlist) => {
        return wishlist.productId != action.payLoad.productId;
      });
    default:
      return state;
  }
}
