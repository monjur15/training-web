import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialState = {
  courses: [],
  loading: true,
  error: null,
};

const fetchCoursesSuccess = (state, action) => {
  return updateObject(state, {
    courses: action.courses,
    error: null,
  });
};

const fetchCoursesFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COURSES_SUCCESS:
      return fetchCoursesSuccess(state, action);
    case actionTypes.FETCH_COURSES_FAIL:
      return fetchCoursesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
