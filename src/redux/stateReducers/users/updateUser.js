import { UPDATEUSER } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const updateUser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEUSER.SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default withAsyncReducer(UPDATEUSER, updateUser);
