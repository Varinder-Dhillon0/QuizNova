import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteQuiz = (mutationConfig = {}) => {
    return useMutation({
        mutationFn: async (quizId) => {
            const res = await axios.post("http://localhost:5000/quiz/delete", { quizId });
            return res.data;
        },
        ...mutationConfig,
    });
}; 