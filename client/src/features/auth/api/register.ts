import axiosInstance from '../../../utils/axios';
import { useMutation } from '@tanstack/react-query';

export const useRegister = (mutationConfig = {}) => {

    return useMutation({
        mutationFn: async (values) => {
            const res = await axiosInstance.post('register', values);
            return res.data;
        },
        ...mutationConfig,
    });
};
