import { GETUSERS } from "../../actionTypes";
// import { withAsyncReducer } from "../../HORs";

const initialState = {
    result: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GETUSERS.START:
          return {
            ...state,
            loading: true,
            error: null
          };
        case GETUSERS.SUCCESS:
          return {
            ...state,
            loading: false,
            result: action.payload
          };
        case GETUSERS.FAIL:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
        default:
          return state;
      }
    }


// export default withAsyncReducer(GETUSERS, getUsers);