const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

// auth
export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
// users
export const POSTUSER = createActionTypes("POSTUSER");
export const UPDATEUSER = createActionTypes("UPDATEUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");
export const GETUSER = createActionTypes("GETUSER");
export const GETUSERS = createActionTypes('GETUSERS')
//messages
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");
export const GETUSERMESSAGES = createActionTypes("GETUSERMESSAGES");
