import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    // Creaet case "USER_SUCCESS" here ...
    case "LOGIN_SUCCESS":
      // Set item token to localStorage here ...
      return {
        isLogin: true,
        user: payload,
      };
    // Creaet case "AUTH_ERROR" here ...
    case "LOGOUT":
      // Remove item token from localStorage here ...
      return {
        isLogin: false,
        user: {},
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
