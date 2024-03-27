'use client'
import Post from "./post"
import DashboardLayout from "@/layouts/DashboardLayout"
import { Provider } from "react-redux"
import store from "@/store"

import PrelineScript from "@/components/PrelineScript";
const AdminPostPage = () => {
  return (
    <body>
      <Provider store={store}>

        <DashboardLayout children={<Post />}>
        </DashboardLayout>
      </Provider>

      <PrelineScript />
    </body>
  )
}
export default AdminPostPage