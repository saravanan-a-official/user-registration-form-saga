import * as CommonConstants from "../../common/commonConstants";
const initialState = CommonConstants.INITIAL_STATE;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CommonConstants.SUBMIT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
