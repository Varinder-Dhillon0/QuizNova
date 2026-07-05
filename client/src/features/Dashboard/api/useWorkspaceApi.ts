import { useMutation, useQuery } from "@tanstack/react-query";
import axiosInstance from "@utils/axios";
import { useContext } from "react";
import { WorkspaceContext } from "..";
import { API_URLS } from "@shared/constants/ApiUrls.constants";

export const useCreateWorkspace = (mutationConfig = {}) => {
  return useMutation({
    mutationFn: async (userEmail) => {
      const res = await axiosInstance.post(API_URLS.WORKSPACE.CREATE, {
        title: "Untitled Workspace",
        creator: userEmail,
      });
      return res.data;
    },
    ...mutationConfig,
  });
};

export const useGetWorkspaces = (userEmail) => {
  const { setSelectedWorkspace } = useContext(WorkspaceContext);

  return useQuery({
    queryKey: ["workspaces", userEmail],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `${API_URLS.WORKSPACE.GET}?creator=${userEmail}`,
      );
      console.log(res);

      if (res.data.workspaces && res.data.workspaces.length > 0) {
        setSelectedWorkspace({
          id: res.data.workspaces[0]._id,
          title: res.data.workspaces[0].title,
        });
      }

      return res.data;
    },
    enabled: !!userEmail,
    refetchOnWindowFocus: false,
  });
};
