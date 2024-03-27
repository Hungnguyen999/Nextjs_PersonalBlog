'use client'
import { register } from "@/store/actions/authAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuccessDialog from "./SuccessDialog";
import FailureDialog from "./FailureDialog";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  // Define a state variable to hold the checkbox value
  const [isChecked, setIsChecked] = useState(false);

  // Use selector to get the state isRegistered
  const isRegistered = useSelector(state => state.register.isRegistered);
  const registerFailed = useSelector(state => state.register.error);

  // Auto check matching password
  useEffect(() => {
    const checkPasswordMatch = () => {
      setPasswordMatch(password === retypePass);
      registerFailed !== "";
    };
    checkPasswordMatch();
  }, [password, retypePass]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (password !== e.target.value) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setRetypePass(e.target.value);
    if (retypePass !== e.target.value) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  // Event handler to toggle the checkbox state
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the state value
  };

  // Step 1: handle submit form for register
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (passwordMatch && isChecked) {
      try {
        await dispatch(register({ username, password }))
        console.log("asd" + registerFailed);
      }
      catch (error) {
        console.error('Sign up :' + error);
      }
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {isRegistered && <SuccessDialog urlDrirect={"login"}
        title={"Đăng ký tài khoản thành công !"}
        message={"Bạn sẽ được chuyển đến trang đăng nhập..."}
        buttonMess={"Đăng nhập"}
      />}
      {registerFailed && (<FailureDialog children={registerFailed} />)}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          LotusCode
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                <input type="username" onChange={e => setUsername(e.target.value)} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input value={retypePass} onChange={handleConfirmPasswordChange} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              {!passwordMatch && (
                < div >
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Please re-check your matching password </label>
                </div>)
              }
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input checked={isChecked} onChange={handleCheckboxChange} id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              {!isChecked && (
                < div >
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-red">Please read & accept the terms and conditions</label>
                </div>)
              }
              <button type="submit" className="w-full text-white bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create an account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}
export default RegisterForm;