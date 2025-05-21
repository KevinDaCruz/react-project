export const initialState = {
  cartCount: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { cartCount: state.cartCount + 1 };
    case "decrement":
      return {
        cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0,
      };
    default:
      return state;
  }
}
