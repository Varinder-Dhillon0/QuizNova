import { useQuery, useMutation } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";
import { API_URLS } from "@shared/constants/ApiUrls.constants";

export const useFetchQuiz = (
  quizId: string,
  userEmail: string,
  onSuccess: any,
  onError: any,
) => {
  return useQuery({
    queryKey: ["quiz", quizId, userEmail],
    queryFn: async () => {
      try {
        const [quizRes, userResponse] = await Promise.all([
          axiosInstance.get(`${API_URLS.QUIZ.GET_QUIZ}?id=${quizId}`),
          axiosInstance.get(
            `${API_URLS.RESPONSE.GET}?userId=${userEmail}&&quizId=${quizId}`,
          ),
        ]);
        console.log(quizRes);
        const result = {
          quiz: quizRes.data.quiz,
          response: userResponse.data.response,
        };
        onSuccess(result);
        return result;
      } catch (error) {
        console.log(error);
        if (onError) onError(error);
        throw error;
      }
    },
    refetchOnWindowFocus: false,
  });
};

export const useUpdateServerResponse = () => {
  return useMutation({
    mutationFn: async ({ updated, responseId }: any) => {
      try {
        console.log("updating response is : ", updated);
        await axiosInstance.post(API_URLS.RESPONSE.UPDATE, {
          responseId,
          updated: { ...updated },
        });
      } catch (error) {
        throw error;
      }
    },
  });
};
