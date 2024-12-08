import { useGoogleLogin } from '@react-oauth/google';
import googleIcon from "../../assets/img/googlelogo.svg";

export default function GoogleLogin({label,isPending}) {

    const login = useGoogleLogin({
        flow: 'auth-code',
        ux_mode: 'redirect',
        prompt: 'none',
        redirect_uri: `${import.meta.env.VITE_API_BASE_URL}googlelogin`,
        onError: (error) => {
            console.error('Login Error:', error);
            Toast(2, "Google login failed", 3000);
        },
    });

    return (
        <button disabled={isPending} onClick={() => login()} type="button" className="bg-[#2e2e2e] disabled:cursor-not-allowed text-[#9ca3af] rounded-sm font-Satoshi-Medium text-md w-full flex justify-center py-2 mb-6 items-center">
            <img src={googleIcon} alt="google" className="w-7 h-7 mr-2" />
            {label}
        </button>
    )
}