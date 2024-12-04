import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateWorkspace = (mutationConfig = {}) => {
    return useMutation({
        mutationFn: async (userEmail) => {
            const res = await axios.post("http://localhost:5000/workspace/create", {
                title: "Untitled Workspace",
                creator: userEmail
            });
            return res.data;
        },
        ...mutationConfig,
    });
};

export const useGetWorkspaces = (userEmail, queryConfig = {}) => {
    return useQuery({
        queryKey: ["workspaces", userEmail],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/workspace/get?creator=${userEmail}`);
            return res.data;
        },
        ...queryConfig,
    });
}; 