import CartActionTypes from "./action-type";

export const addProductToCart = (payLoad: any) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payLoad,
});

export const removeProductsFromCart = (payLoad: any) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payLoad,
})

export const increaseProducts = (payLoad: any) => ({
  type: CartActionTypes.INCREASE_PRODUCT,
  payLoad,
})
export const decreaseProducts = (payLoad: any) => ({
  type: CartActionTypes.DECREASE_PRODUCT,
  payLoad,
})