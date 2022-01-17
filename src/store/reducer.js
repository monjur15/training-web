import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialState = {
  courses: [],
  instructors: [],
  categories: [],
  reviews: [],
  photos: [],
  blogs: [],
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

const fetchInstructorsSuccess = (state, action) => {
  return updateObject(state, {
    instructors: action.instructors,
    error: null,
  });
};

const fetchInstructorsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchCategoriesSuccess = (state, action) => {
  return updateObject(state, {
    categories: action.categories,
    error: null,
  });
};

const fetchCategoriesFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchReviewsSuccess = (state, action) => {
  return updateObject(state, {
    reviews: action.reviews,
    error: null,
  });
};

const fetchReviewsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchPhotosSuccess = (state, action) => {
  return updateObject(state, {
    photos: action.photos,
    error: null,
  });
};

const fetchPhotosFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchBlogsSuccess = (state, action) => {
  return updateObject(state, {
    blogs: action.blogs,
    error: null,
  });
};

const fetchBlogsFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COURSES_SUCCESS:
      return fetchCoursesSuccess(state, action);
    case actionTypes.FETCH_COURSES_FAIL:
      return fetchCoursesFail(state, action);
    case actionTypes.FETCH_INSTRUCTORS_SUCCESS:
      return fetchInstructorsSuccess(state, action);
    case actionTypes.FETCH_INSTRUCTORS_FAIL:
      return fetchInstructorsFail(state, action);
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSuccess(state, action);
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return fetchCategoriesFail(state, action);
    case actionTypes.FETCH_REVIEWS_SUCCESS:
      return fetchReviewsSuccess(state, action);
    case actionTypes.FETCH_REVIEWS_FAIL:
      return fetchReviewsFail(state, action);
    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return fetchPhotosSuccess(state, action);
    case actionTypes.FETCH_PHOTOS_FAIL:
      return fetchPhotosFail(state, action);
    case actionTypes.FETCH_BLOGS_SUCCESS:
      return fetchBlogsSuccess(state, action);
    case actionTypes.FETCH_BLOGS_FAIL:
      return fetchBlogsFail(state, action);

    default:
      return state;
  }
};

export default reducer;
