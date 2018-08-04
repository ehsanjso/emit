export const changeState = state => ({
  type: "CHANGE_STATE",
  state
});

export const setStartTime = start => ({
  type: "SET_START_TIME",
  start
});

export const setEndTime = end => ({
  type: "SET_END_TIME",
  end
});
