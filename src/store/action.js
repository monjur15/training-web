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
        console.log(fetchedCourses);
        dispatch(fetchCoursesSuccess(fetchedCourses));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchCoursesFail(error));
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

export const fetchInstructors = () => {
  return (dispatch) => {
    let fetchedInstructors = [];
    Axios.get("api/instructors")
      .then((response) => {
        for (let key in response.data) {
          fetchedInstructors.push({ ...response.data[key] });
        }
        console.log(fetchedInstructors);
        dispatch(fetchInstructorsSuccess(fetchedInstructors));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchInstructorsFail(error));
      });
  };
};

export const fetchInstructorsSuccess = (instructors) => {
  return {
    type: actionTypes.FETCH_INSTRUCTORS_SUCCESS,
    instructors: instructors,
  };
};

export const fetchInstructorsFail = (error) => {
  return {
    type: actionTypes.FETCH_INSTRUCTORS_FAIL,
    error: error,
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    let fetchedCategories = [];
    Axios.get("api/categories")
      .then((response) => {
        for (let key in response.data) {
          fetchedCategories.push({ ...response.data[key] });
        }
        console.log(fetchedCategories);
        dispatch(fetchCategoriesSuccess(fetchedCategories));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchCategoriesFail(error));
      });
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories,
  };
};

export const fetchCategoriesFail = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error,
  };
};

export const fetchReviews = () => {
  return (dispatch) => {
    let fetchedReviews = [];
    Axios.get("api/reviews")
      .then((response) => {
        for (let key in response.data) {
          fetchedReviews.push({ ...response.data[key] });
        }
        console.log(fetchedReviews);
        dispatch(fetchReviewsSuccess(fetchedReviews));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchReviewsFail(error));
      });
  };
};

export const fetchReviewsSuccess = (reviews) => {
  return {
    type: actionTypes.FETCH_REVIEWS_SUCCESS,
    reviews: reviews,
  };
};

export const fetchReviewsFail = (error) => {
  return {
    type: actionTypes.FETCH_REVIEWS_FAIL,
    error: error,
  };
};

export const fetchPhotos = () => {
  return (dispatch) => {
    let fetchedPhotos = [];
    Axios.get("api/gallery")
      .then((response) => {
        for (let key in response.data) {
          fetchedPhotos.push({ ...response.data[key] });
        }
        console.log(fetchedPhotos);
        dispatch(fetchPhotosSuccess(fetchedPhotos));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchPhotosFail(error));
      });
  };
};

export const fetchPhotosSuccess = (photos) => {
  return {
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    photos: photos,
  };
};

export const fetchPhotosFail = (error) => {
  return {
    type: actionTypes.FETCH_PHOTOS_FAIL,
    error: error,
  };
};

export const fetchBlogs = () => {
  return (dispatch) => {
    let fetchedBlogs = [];
    Axios.get("api/blogs")
      .then((response) => {
        for (let key in response.data) {
          fetchedBlogs.push({ ...response.data[key] });
        }
        console.log(fetchedBlogs);
        dispatch(fetchBlogsSuccess(fetchedBlogs));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchBlogsFail(error));
      });
  };
};

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: actionTypes.FETCH_BLOGS_SUCCESS,
    blogs: blogs,
  };
};

export const fetchBlogsFail = (error) => {
  return {
    type: actionTypes.FETCH_BLOGS_FAIL,
    error: error,
  };
};
