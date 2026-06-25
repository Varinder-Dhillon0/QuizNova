import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { WorkspaceContext } from '..';

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

export const useGetWorkspaces = (userEmail) => {
    const { setselectedWorkspace } = useContext(WorkspaceContext);

    return useQuery({
        queryKey: ["workspaces", userEmail],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/workspace/get?creator=${userEmail}`);
            console.log(res);

            if (res.data.workspaces && res.data.workspaces.length > 0) {
                setselectedWorkspace({ 
                    id: res.data.workspaces[0]._id, 
                    title: res.data.workspaces[0].title 
                });
            }

            return res.data;
        },
        enabled: !!userEmail,
        refetchOnWindowFocus: false
    });
}; 