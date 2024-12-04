import axiosInstance from '../../../utils/axios';
import { useMutation } from '@tanstack/react-query';

export const useLogin = (mutationConfig = {}) => {

    return useMutation({
        mutationFn: async (values) => {
            const res = await axiosInstance.post('login', values);
            return res.data;
        },
        ...mutationConfig,
    });
};
