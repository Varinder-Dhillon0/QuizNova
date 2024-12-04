import axiosInstance from '../../../utils/axios';
import { useMutation } from '@tanstack/react-query';

export const useCreateQuiz = (mutationConfig = {}) => {
    return useMutation({
        mutationFn: async ({ values, user, workspaceId }) => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (key === 'quizThumbnail' && values.quizThumbnail) {
                    formData.append(key, values.quizThumbnail);
                } else if (key === 'category' && Array.isArray(values[key])) {
                    values[key].forEach((category) => {
                        formData.append('category[]', category);
                    });
                } else {
                    formData.append(key, values[key]);
                }
            });

            const res = await axiosInstance.post('quiz/create', formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                params: {
                    creator: user.email,
                    workspace_id: workspaceId,
                },
            });
            return res.data;
        },
        ...mutationConfig,
    });
}; 