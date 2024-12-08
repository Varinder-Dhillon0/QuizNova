import { useState } from "react";
import { useAuth } from "../hooks/useAuth"
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Backdrop from "./backdrop";
import HamburgerLink from "./hamburgerLink";

export default function User() {
    const { user, logout } = useAuth();
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">
            <button className={`text-white h-7 flex items-center justify-center w-7 text-sm rounded-full`} onClick={() => setMenu(!menu)}>
                {user.profile_pic ? 
                <img src={user.profile_pic} referrerPolicy="no-referrer" alt="Profile" className="w-full h-full object-cover rounded-full" /> : 
                user.name.charAt(0)}
            </button>
            <AnimatePresence>
                {menu &&
                    <Backdrop action={() => setMenu(false)} bg={"#eklkmf"}>
                        <motion.div
                            initial={{ y: -20, x: 20, opacity: 0 }}
                            transition={{ duration: 0.15, ease: "anticipate" }}
                            animate={{ y: 0, x: 0, opacity: 1 }}
                            exit={{ y: -20, x: 20, opacity: 0 }}
                            className="absolute z-50 top-10 right-0 w-max p-4 pt-2 rounded-lg text-[15px] bg-white shadow-lg"
                        >
                            <HamburgerLink icon={""} title="Dashboard" action={() => navigate("/admin/dashboard")} />
                            <HamburgerLink icon={""} title="Logout" action={logout} />
                        </motion.div>
                    </Backdrop>
                }
            </AnimatePresence>
        </div>
    );
}


