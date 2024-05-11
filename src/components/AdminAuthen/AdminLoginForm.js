'use client'
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { login } from "@/store/actions/authAction"
import useTokenValidation from "@/store/utils/userTokenValidation";

import FailureDialog from '@/components/FailureDialog';


const AdminLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const loginFailed = useSelector(state => state.auth.error);

  // Redirect to '/about' page when user is logged in
  useEffect(() => {
    // MUST: DISPATCH TO LOGOUT SUCCESS, IF DONT IT WILL RE-RENDER TO DASHBOARD EVERY TIME
    if (isLoggedIn) {
      router.push('/admin/dashboard');
    }
  }, [isLoggedIn, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("handle login " + username + " " + password);
      await dispatch(login({ username, password }));
    } catch (error) {
      console.error('Login error:', error.message);
    }
  }
  return (
    < div className="container mx-auto" >
      {loginFailed && <FailureDialog children={loginFailed} message={"Đăng nhập không thành công ! Vui lòng đăng nhập lại"} />}
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{ backgroundImage: "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')" }}
          ></div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" type="submit" onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={e => setPassword(e.target.value)}
                />
                {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
              </div>
              <div className="mb-4">
                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Create an Account!
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
export default AdminLoginForm;