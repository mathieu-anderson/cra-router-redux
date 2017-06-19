module.exports = function(state = null, action) {
  switch (action.type) {
    case "TEST":
      return state.concat([action.text]);

    default:
      return state;
  }
};
