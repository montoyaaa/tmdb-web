// import * as requests from './crud';
import { callTypes } from "";
import { cartSlice } from "./slice";

const { actions } = cartSlice;

export const getCart = () => async (dispatch) => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return dispatch(
    actions.cartFetched({
      currentCartProducts: [],
    })
  );
};
