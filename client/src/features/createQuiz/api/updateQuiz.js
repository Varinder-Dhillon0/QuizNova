import axiosInstance from '../../../utils/axios';
import { useMutation } from '@tanstack/react-query';

export const useUpdateQuiz = (mutationConfig = {}) => {
    return useMutation({
        mutationFn: async ({ values, user, workspaceId, quizId }) => {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                if (key === 'quizThumbnail' && values.quizThumbnail) {
                    formData.append(key, values.quizThumbnail);
                } else if (key === 'category' && Array.isArray(values[key])) {
                    values[key].forEach((category) => {
                        formData.append('category[]', category);
                    });
                } else if (key === 'settings') {
                    formData.append(key, JSON.stringify(values[key]));
                } else {
                    formData.append(key, values[key]);
                }
            });

            // Log both the values and formData entries to debug
            console.log("Original values:", values);
            const formDataEntries = {};
            for (let [key, value] of formData.entries()) {
                formDataEntries[key] = value;
            }
            console.log("FormData entries:", formDataEntries);

            const res = await axiosInstance.post('quiz/update', formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                },
                params: {
                    creator: user.email,
                    workspace_id: workspaceId,
                    quizId
                },
            });
            return res.data;
        },
        ...mutationConfig,
    });
};
