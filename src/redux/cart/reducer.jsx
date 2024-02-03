import CartActionTypes from "./action-type";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payLoad.id
      );

      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payLoad.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...action.payLoad, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payLoad
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payLoad
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payLoad
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
