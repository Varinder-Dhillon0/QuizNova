import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteQuiz = (mutationConfig = {}, refetchQuizzes) => {
    return useMutation({
        mutationFn: async (quizId) => {
            const res = await axios.post("http://localhost:5000/quiz/delete", { quizId });

            window.location.reload();
            return res.data;
        },
        ...mutationConfig,
    });
}; 