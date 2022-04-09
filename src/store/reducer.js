import * as actionTypes from "./actionTypes";
import { updateObject } from "./utility";

const initialState = {
  courses: [],
  popularCourses: [],
  instructors: [],
  categories: [],
  reviews: [],
  photos: [],
  blogs: [],
  singleBlog: {},
  singleCourse: {},
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

const fetchSingleCourseSuccess = (state, action) => {
  return updateObject(state, {
    singleCourse: action.singleCourse,
    error: null,
  });
};

const fetchSingleCourseFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const fetchPopularCoursesSuccess = (state, action) => {
  return updateObject(state, {
    popularCourses: action.popularCourses,
    error: null,
  });
};

const fetchPopularCoursesFail = (state, action) => {
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

const fetchSingleBlogSuccess = (state, action) => {
  return updateObject(state, {
    singleBlog: action.singleBlog,
    error: null,
  });
};

const fetchSingleBlogFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COURSES_SUCCESS:
      return fetchCoursesSuccess(state, action);
    case actionTypes.FETCH_COURSES_FAIL:
      return fetchCoursesFail(state, action);
    case actionTypes.FETCH_SINGLE_COURSE_SUCCESS:
      return fetchSingleCourseSuccess(state, action);
    case actionTypes.FETCH_SINGLE_COURSE_FAIL:
      return fetchSingleCourseFail(state, action);
    case actionTypes.FETCH_POPULAR_COURSES_SUCCESS:
      return fetchPopularCoursesSuccess(state, action);
    case actionTypes.FETCH_POPULAR_COURSES_FAIL:
      return fetchPopularCoursesFail(state, action);
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
    case actionTypes.FETCH_SINGLE_BLOG_SUCCESS:
      return fetchSingleBlogSuccess(state, action);
    case actionTypes.FETCH_SINGLE_BLOG_FAIL:
      return fetchSingleBlogFail(state, action);

    default:
      return state;
  }
};

export default reducer;
