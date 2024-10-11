import { Outlet} from "react-router-dom";

export default function Admin() {

    return (
        <>
            <div className="flex w-[100%]">
                <Outlet/>
            </div> 
        </>
    )
}