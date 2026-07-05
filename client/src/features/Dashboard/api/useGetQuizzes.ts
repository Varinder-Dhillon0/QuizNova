import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";
import { API_URLS } from "@shared/constants/ApiUrls.constants";

export const useGetQuizzes = (mutationConfig = {}) => {
  return useMutation({
    mutationFn: async ({ workspaceId, creatorEmail }) => {
      const res = await axiosInstance.get(
        `${API_URLS.QUIZ.GET}?workspace=${workspaceId}&creator=${creatorEmail}`,
      );
      console.log("Resoinse from getting quizzes : ", res.data);
      return res.data;
    },
    ...mutationConfig,
  });
};
