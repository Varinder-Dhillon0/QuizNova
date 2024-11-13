/**
 * <summary>
 * The Workspace component in JavaScript React handles the display and functionality of individual
 * workspace items, including editing and deleting options.
 * </summary>
 */
import { useQues } from "../../hooks/useQues"
import threedots from "../../assets/img/dots-three-vertical.svg"
import { useEffect, useRef, useState } from "react";
import Backdrop from "../common/backdrop";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerLink from "../common/hamburgerLink";
import trash from "../../assets/img/trash-simple-red.svg"
import pencil from "../../assets/img/pencil.svg"
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import axios from "axios";
import DropdownMenu from "../common/dropdownMenu";

export default function Workspace({ id, title, i , refetchWorkspaces,selectedworkspace, setselectedWorkspace}) {

    const [editingWorkspace, seteditingWorkspace] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const inputRef = useRef(null);
    const colors = ["#FFE600", "#EF5E2B", "#00DC89", "#CA48A5", "#2FABE1", "#FFB000", "#401E8C", "#5A4BEA"];
    const workspacetitle = useFormik({
        initialValues : {title : title},
        onSubmit : (values) =>{
            updateWorkspace(values);
        }
    });

    const {mutate : updateWorkspace} = useMutation({
        mutationFn : async(values) =>{
            console.log(values);
            const res = await axios.post("http://localhost:5000/workspace/update",{
                id : id,
                ...values
            })
            return res.data;
        }
    })

    const {mutate : deleteWorkspace} = useMutation({
        mutationFn : async(values) =>{
            console.log(values);
            const res = await axios.post("http://localhost:5000/workspace/delete",{
                id : id
            })
            return res.data;
        },
        onSuccess : () =>{
            refetchWorkspaces();
        }
    })

    useEffect(() => {
        editingWorkspace && inputRef.current?.focus();
    }, [editingWorkspace])

    return (
        <div className={`mt-2 mb-4 p-2 flex cursor-pointer justify-between items-center pr-3 pl-3 rounded-md  w-full ${selectedworkspace.id == id ? "bg-[#e6e6e6] font-Silka-Bold" : ""}`} onClick={() => { selectedworkspace.id != id && setselectedWorkspace({ id: id, title: title }) }} >
            <div className="flex items-center cursor-pointer">
                <div className="w-2 rounded-sm h-2" style={{ background: colors[i > 7 ? i % 7 : i] }}></div>
                <h1 className="ml-2 text-sm">
                    {editingWorkspace ?
                        <Backdrop action={() => { seteditingWorkspace(false); workspacetitle.handleSubmit()}}>
                            <input className="bg-transparent border-b-[2px] border-black outline-none relative z-50"
                                type="text"
                                {...workspacetitle.getFieldProps("title")}
                                onClick={(e) => { e.stopPropagation() }} 
                                ref={inputRef}
                            />
                        </Backdrop> : workspacetitle.values.title}
                </h1>
            </div>
            <div className="">
                <img className="cursor-pointer" src={threedots} onClick={(e) => { e.stopPropagation(); setDropdown(!dropdown) }} alt="" />
                {dropdown && <DropdownMenu dropdown={dropdown} setDropdown={setDropdown}>
                    <HamburgerLink icon={pencil} title="Edit" action={() => { seteditingWorkspace(true) }} />
                    <HamburgerLink icon={trash} title="Delete" action={() => { deleteWorkspace()}} />
                </DropdownMenu>}
            </div>
        </div>
    )
}