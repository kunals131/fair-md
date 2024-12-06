import { useRouter } from "next/router"
import { useState } from "react"
import toast from "react-hot-toast"
import { TailSpin } from 'react-loader-spinner'



const EMAIL = "admin@fairmd.com"
const PASSWORD = "shouryaLovesPratham"

export default function Example() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const router = useRouter();
    const handleSignup = () => {
        setIsSignup(!isSignup)
    }
    const handleLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            if (email === EMAIL && password === PASSWORD) {
                setIsLoading(false)
                console.log("Logged in")
            } else {
                setIsLoading(false)
                toast.error("Invalid credentials")
                console.log("Invalid credentials")
            }
        }, 3000)
    }
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-900">
          <body class="h-full">
          ```
        */}
            <div className="flex bg-gray-900 min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => e.preventDefault()} action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleLogin}
                                className="flex gap-4 w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                {isLoading && <TailSpin height={20} width={20} color="white" />}   {isLoading ? "Loading.." : "Login"}
                            </button>
                        </div>
                    </form>

                    <p onClick={handleSignup} className="mt-10 text-center text-sm/6 text-gray-400">
                        {
                            !isSignup ? <>
                                Not a member?{' '}
                                <span className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    Sign up
                                </span>
                            </> : <>
                                Already a member?{' '}
                                <span className="font-semibold text-indigo-400 hover:text-indigo-300">
                                    Sign up
                                </span></>
                        }
                    </p>
                </div>
            </div>
        </>
    )
}
