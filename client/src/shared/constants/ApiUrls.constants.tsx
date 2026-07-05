export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const API_URLS = {
  AUTH: {
    VALIDATE_USER: "/validateuser",
    GOOGLE_LOGIN_REDIRECT: "/googlelogin",
    REGISTER: "/register",
    LOGIN: "/login",
    FETCH: "/fetch",
  },
  WORKSPACE: {
    CREATE: "/workspace/create",
    GET: "/workspace/get",
    UPDATE: "/workspace/update",
    DELETE: "/workspace/delete",
  },
  QUIZ: {
    CREATE: "/quiz/create",
    UPDATE: "/quiz/update",
    DELETE: "/quiz/delete",
    GET: "/quiz/get",
    GET_QUIZ: "/quiz/getQuiz",
    PUBLISH: "/quiz/publish",
    QUES: {
      UPDATE: "/quiz/ques/update",
      UPLOAD_IMAGE: "/quiz/ques/uploadImage",
      DELETE_IMAGE: "/quiz/ques/deleteImage",
    },
  },
  RESPONSE: {
    CREATE: "/response/create",
    UPDATE: "/response/update",
    GET: "/response/get",
    GENERATE_RESULT: "/response/generateresult",
    RESULTS: "/response/results",
    SINGLE_RESULT: "/response/singleresult",
  },
  UPLOADS: {
    BASE: "/uploads",
  },
};
