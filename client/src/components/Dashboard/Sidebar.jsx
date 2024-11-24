import Workspace from "./workspace";
import plus from "../../assets/img/plus.svg"
import { useRef, useState } from "react";
import Popup from "../common/popup";
import Backdrop from "../common/backdrop";
import { AnimatePresence } from "framer-motion";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import pencil from "../../assets/img/pencil-fill.svg"
import { Plus } from "@phosphor-icons/react";

export default function Sidebar({ selectedworkspace, setselectedWorkspace }) {

    const [popup, setPopup] = useState(false);
    const { user } = useAuth();
    const inputRef = useRef(null);

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
                setPopup(false);
                setselectedWorkspace({ id: selectedworkspace.id, title: workspace })
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
                setselectedWorkspace(selectedworkspace ? { id: res.data.workspaces[totalWorkspaces -1]._id, title: res.data.workspaces[totalWorkspaces -1].title } : { id: res.data.workspaces[0]._id, title: res.data.workspaces[0].title });
            }
            return res.data;
        },refetchOnWindowFocus : false
    });

    return (
        <div className="h-[100%] w-[100%]">
            <div className="flex justify-between items-center relative mb-5 pt-5 pl-2 pr-2">
                <p className="ml-1 font-Satoshi-Black">Workspaces</p>
                <button className="bg-white p-1.5 border-[1px] rounded-full" onClick={() => {createWorkspace()}}>
                    <Plus size={14} weight="bold"/>
                </button>

            </div>
            {isLoading ? <h1>loading</h1>
                : data.workspaces.map((workspace, i) => {
                    console.log("data", workspace);
                    return <Workspace key={i} i={i} id={workspace._id} refetchWorkspaces={refetchWorkspaces} title={workspace.title} selectedworkspace={selectedworkspace} setselectedWorkspace={setselectedWorkspace} />
                })}
        </div>
    )
}