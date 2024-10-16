import { useState } from "react";
import { useAuth } from "../../hooks/useAuth"
import signout from "../../assets/img/sign-out.svg"
import { AnimatePresence, motion } from "framer-motion";
import dashboard from "../../assets/img/dashboard.svg"
import { useNavigate } from "react-router-dom";

export default function User() {

    const { user, logout } = useAuth();
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">
            <button className="bg-blue-400 text-white h-7 w-7 text-[13px] rounded-full" onClick={() => setMenu(!menu)}>
                {user.name.charAt(0)}
            </button>
            <AnimatePresence>
                {menu &&
                        <motion.div  
                        initial={{y: -20,x: 20, opacity: 0}}
                        transition={{ duration: 0.15, ease : "anticipate"}}  
                        animate={{ y: 0,x:0, opacity: 1 }} 
                        exit={{y: -20,x: 20, opacity: 0}}
                        className="absolute z-50 -right-1/4 bg-white top-10 w-max p-4 pt-2 rounded-lg text-[15px] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]"
                        >
                            <Link icon={dashboard} title="Dashboard" action={() => navigate("/admin/dashboard")}/>
                            <Link icon={signout} title="Logout" action={logout}/>
                        </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

function Link({icon, title, action}) {

    return (
        <button className="flex items-center pt-2" onClick={action}>
            <img src={icon} className="mr-2" alt="" />
            {title}
        </button>
    )
}