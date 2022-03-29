let val = 1;
export const reducer = (state = val, action) => {
  switch (action.type) {
    case "VALUE":
      return (val = action.val);
    default:
      return state;
  }
};
