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

export const fetchSingleCourse = (courseId) => {
  return (dispatch) => {
    Axios.get("api/single-course/" + courseId)
      .then((response) => {
        console.log(response.data);
        dispatch(fetchSingleCourseSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchSingleCourseFail(error));
      });
  };
};

export const fetchSingleBlog = (blogId) => {
  return (dispatch) => {
    Axios.get("api/single-blog/" + blogId)
      .then((response) => {
        console.log(response.data);
        dispatch(fetchSingleBlogSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchSingleBlogFail(error));
      });
  };
};

export const fetchPopularCourses = () => {
  return (dispatch) => {
    let fetchedCourses = [];
    Axios.get("api/popular-courses")
      // Axios.get("api/")
      .then((response) => {
        for (let key in response.data) {
          fetchedCourses.push({ ...response.data[key] });
        }
        console.log(fetchedCourses);
        dispatch(fetchPopularCoursesSuccess(fetchedCourses));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchPopularCoursesFail(error));
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

export const fetchSingleCourseSuccess = (singleCourse) => {
  return {
    type: actionTypes.FETCH_SINGLE_COURSE_SUCCESS,
    singleCourse: singleCourse,
  };
};

export const fetchSingleCourseFail = (error) => {
  return {
    type: actionTypes.FETCH_SINGLE_COURSE_FAIL,
    error: error,
  };
};

export const fetchSingleBlogSuccess = (singleBlog) => {
  return {
    type: actionTypes.FETCH_SINGLE_BLOG_SUCCESS,
    singleBlog: singleBlog,
  };
};

export const fetchSingleBlogFail = (error) => {
  return {
    type: actionTypes.FETCH_SINGLE_BLOG_FAIL,
    error: error,
  };
};

export const fetchPopularCoursesSuccess = (popularCourses) => {
  return {
    type: actionTypes.FETCH_POPULAR_COURSES_SUCCESS,
    popularCourses: popularCourses,
  };
};

export const fetchPopularCoursesFail = (error) => {
  return {
    type: actionTypes.FETCH_POPULAR_COURSES_FAIL,
    error: error,
  };
};

export const createInstructor = (instructor) => {
  return (dispatch) => {
    try {
      Axios({
        method: "post",
        url: "api/instructors",
        data: instructor,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCourse = (course) => {
  return (dispatch) => {
    try {
      Axios({
        method: "post",
        url: "api/courses",
        data: course,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createBlog = (blog) => {
  return (dispatch) => {
    try {
      Axios({
        method: "post",
        url: "api/blogs",
        data: blog,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToGallery = (data) => {
  return (dispatch) => {
    try {
      Axios({
        method: "post",
        url: "api/gallery",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addReview = (review) => {
  return (dispatch) => {
    try {
      Axios({
        method: "post",
        url: "api/reviews",
        data: review,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCategory = (category) => {
  // Axios.post("api/categories", category).then((res) => {
  //   console.log(res.data);
  // });
  return (dispatch) => {
    try {
      Axios({
        method: "post",
        url: "api/categories",
        data: category,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// api/blogs

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
