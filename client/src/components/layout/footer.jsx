import Logo from "/logo.svg";

export default function Footer() {
    return (
        <div className="flex items-start justify-center gap-28 p-36 ">
            <div className=" box1 flex flex-col gap-4 items-start justify-center w-[23%]">
                <div className="flex gap-4 items-center justify-center">
                    <div className="h-8 w-8">
                        <img src={Logo} alt="" className="object-contain" />
                    </div>
                    <h1 className="font-Satoshi-Bold leading-none text-4xl">QuizNova</h1>
                </div>
                <h2 className="font-Satoshi-Regular text-md">
                Empowering creativity, connecting minds, and transforming the way quizzes are shared and experienced.
                </h2>
            </div>
            <div className="flex gap-20">
                <div className="box2 flex flex-col items-start">
                    <div className="w-full">
                        <h1 className="font-Satoshi-Bold">PAGES</h1>
                    </div>
                    <div className="w-full mt-[52px]">
                        <ul className="font-Satoshi-Regular space-y-4">
                            <li>Homepage</li>
                            <li>About</li>
                            <li>Pricing</li>
                            <li>Features</li>
                            <li>Integration</li>
                            <li>Blog</li>
                            <li>Blog Details</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="box3 flex flex-col items-start">
                    <div className="w-full">
                        <h1 className="font-Satoshi-Bold">UTILITY PAGES</h1>
                    </div>
                    <div className="w-full mt-[52px]">
                        <ul className="font-Satoshi-Regular space-y-4">
                            <li>Style Guide</li>
                            <li>Licenses</li>
                            <li>404 Not Found</li>
                            <li>Changelog</li>
                            <li>Log In</li>
                            <li>Register</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box4 flex flex-col gap-12">
                <div>
                    <h1 className="font-Satoshi-Bold">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h1>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="font-Satoshi-Regular">
                        *Only valueable resource no bullshit
                    </h2>
                    <div className="flex items-center gap-6 justify-center">
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="bg-[#f4f4f4] font-Satoshi-Regular rounded-full py-4 px-14 placeholder-[#888888]"
                        />
                        <div className="bg-[#000000] rounded-full h-14 w-14"></div>
                    </div>
                    <h1 className="font-Satoshi-Bold mt-4">SOCIAL MEDIA</h1>
                    <div className="flex items-center justify-start gap-4">
                        <div className="rounded-full bg-[#F4F4F4] h-10 w-10"></div>
                        <div className="rounded-full bg-[#F4F4F4] h-10 w-10"></div>
                        <div className="rounded-full bg-[#F4F4F4] h-10 w-10"></div>
                        <div className="rounded-full bg-[#F4F4F4] h-10 w-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
