'use client'
import Post from "./post"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation";
import DashboardLayout from "@/layouts/DashboardLayout"
import { Provider } from "react-redux"
import store from "@/store"
import useTokenValidation from "@/store/utils/userTokenValidation"
import Cookies from 'js-cookie'

const AdminPostPage = () => {
  // Require validate the token to take account info
  const router = useRouter();
  const isValid = useTokenValidation();
  useEffect(() => {
    const storedToken = Cookies.get('userToken');
    if (!storedToken) {
      router.push("/admin/login")
    }
  }, [router]);
  return (
    <>
      <Provider store={store}>
        {isValid && <>
          <DashboardLayout children={<Post />}>
          </DashboardLayout>
        </>
        }
      </Provider>
    </>
  )
}
export default AdminPostPage