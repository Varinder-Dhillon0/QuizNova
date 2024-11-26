import Workspace from "./workspace";
import { useContext, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { Plus } from "@phosphor-icons/react";
import User from "../common/user";
import { WorkspaceContext } from ".";

export default function Sidebar() {

    const { user } = useAuth();
    const {selectedworkspace, setselectedWorkspace} = useContext(WorkspaceContext);

    const { mutate: createWorkspace, isPending } = useMutation({
        mutationFn: async () => {
            const res = await axios.post("http://localhost:5000/workspace/create", {
                title: "Untitled Workspace",
                creator: user.email
            });[]
            refetchWorkspaces();
            return res.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                setselectedWorkspace({ id: selectedworkspace.id, title: "Untitled Workspace" })
                refetchWorkspaces();
            }
            else if (data.warning) {
                console.log("warning", data.warning);
            }
            else {
                console.log("error", data.error);
            }
        },
        onError: (data) => {
            console.log(data);
        }
    })

    const { data, isLoading, error, refetch: refetchWorkspaces } = useQuery({
        queryKey: ["workspaces"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/workspace/get?creator=${user.email}`);
            const totalWorkspaces = res.data.workspaces.length;
            if (totalWorkspaces > 0) {
                setselectedWorkspace({ id: res.data.workspaces[0]._id, title: res.data.workspaces[0].title });
            }
            return res.data;
        }, refetchOnWindowFocus: false
    });

    return (
        <div className="no-scrollbar sticky z-50 top-2">
            <div className="flex justify-between border-b-2 p-4 w-full">
                <p className="ml-1">QuizNova</p>
                <User />

            </div>
            <div className="p-4">
                <div className="flex justify-between items-center relative mb-5 pt-5">
                    <p className="ml-1 font-Satoshi-Black">Workspaces</p>
                    <button className="bg-white p-1.5 border-[1px] rounded-full" onClick={() => { createWorkspace() }}>
                        <Plus size={14} weight="bold" />
                    </button>

                </div>
                {isLoading ? <h1>loading</h1>
                    : data.workspaces.map((workspace, i) => {
                        return <Workspace key={i} i={i} id={workspace._id} refetchWorkspaces={refetchWorkspaces} title={workspace.title} selectedworkspace={selectedworkspace} setselectedWorkspace={setselectedWorkspace} />
                    })}
            </div>

        </div>
    )
}