import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";
import { API_URLS } from "@shared/constants/ApiUrls.constants";

export const useDeleteQuiz = (mutationConfig = {}, refetchQuizzes) => {
  return useMutation({
    mutationFn: async (quizId) => {
      const res = await axiosInstance.post(API_URLS.QUIZ.DELETE, { quizId });

      window.location.reload();
      return res.data;
    },
    ...mutationConfig,
  });
};
