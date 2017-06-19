module.exports = function(state = null, action) {
  switch (action.type) {
    case "ADD_ONE":
      return state.test.concat([action.text]);

    default:
      return state;
  }
};
