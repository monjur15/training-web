import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const fetchCourses = () => {
  return (dispatch) => {
    let fetchedCourses = [];
    Axios.get("api/courses")
      .then((response) => {
        for (let key in response.data) {
          fetchedCourses.push({ ...response.data[key] });
        }
        dispatch(fetchCoursesSuccess(fetchedCourses));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchCoursesSuccess = (courses) => {
  return {
    type: actionTypes.FETCH_COURSES_SUCCESS,
    courses: courses,
  };
};

export const fetchCoursesFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSES_FAIL,
    error: error,
  };
};
