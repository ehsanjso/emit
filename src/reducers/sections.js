const sectionsReducerDefaultState = [];

export default (state = sectionsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_SECTION":
      return [...state, action.section];
    default:
      return state;
  }
};
