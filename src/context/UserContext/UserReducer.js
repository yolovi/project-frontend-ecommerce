const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
    case "GET_USER_LOGGED":
      return {
        ...state,
        user: action.payload,
      };
  }
};

export default users;
