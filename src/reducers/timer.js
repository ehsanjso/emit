const timerReducerDefaultState = {
  state: "pause",
  start: 0,
  end: 0
};

export default (state = timerReducerDefaultState, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return { ...state, state: action.state };
    case "SET_START_TIME":
      return { ...state, start: action.start };
    case "SET_END_TIME":
      return { ...state, end: action.end };
    default:
      return state;
  }
};
