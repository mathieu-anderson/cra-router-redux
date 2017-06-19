module.exports = function(state = null, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      return state.concat([action.number]);
    // with spread operator : return [...state, action.number]

    default:
      return state;
  }
};
