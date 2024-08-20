import { greenglow , blueglow , yellowglow } from "../assets/img"
  
export default function Login(){
    
    return(
        <div className="w-[100vw] h-[100vh] flex flex-row overflow-hidden">
            <div className="w-[50%] flex align-middle justify-center h-full bg-black">
                <div className="w-[70%] bg-[#212121] h-[400px] max-w-[520px] pt-[40px] pb-[40px] pl-[32px] pr-[32px] text-white">
                        <h1 className="font-satoshi font-bold text-[32px] text-center mb-[32px]">Welcome back</h1>
                        <div className="flex flex-col">
                            <input className="bg-[#2e2e2e] text-[#999999] pr-[5px] mb-[20px] pl-[5px] pb-[10px] pt-[10px]" type="email" placeholder="E-mail address*" name="email"/>
                            <input className="bg-[#2e2e2e] text-[#999999] pr-[5px] mb-[20px] pl-[5px] pb-[10px] pt-[10px]" type="password" placeholder="Password*" name="password" />
                            <button className="w-[100px]">Submit</button>
                        </div>
                </div>
            </div>
            <div className="w-[50%] h-[100%] overflow-hidden">
                <img className="absolute" src={yellowglow} alt="" />
                <img className="absolute" src={blueglow} alt="" />
                <img className="absolute" src={greenglow} alt="" />
            </div>
        </div>
    )
}