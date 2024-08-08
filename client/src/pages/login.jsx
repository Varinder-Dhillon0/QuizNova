export default function Login(){



    return(
        <div className="w-[100vw] h-[100vh] flex">
            <div className="w-[50%] h-full bg-blue-400">

            </div>
            <div className="w-[50%] h-full">
                <div>
                    <h1>Login</h1>
                        <div className="flex flex-col">
                            <input type="email" placeholder="Enter email" name="email" className="border-1"/>
                            <input type="password" placeholder="Enter password" name="password" />
                            <button className="w-[100px]">Submit</button>
                        </div>
                </div>
            </div>
        </div>
    )
}