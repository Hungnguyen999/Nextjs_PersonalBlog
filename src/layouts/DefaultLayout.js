'use client'
import { usePathname } from 'next/navigation'
import Header from "../components/Header";
import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "../components/Footer";


// This file includes the most common layouts for 1 page. Ex: Header, Footer, Navigation ....
// use param children for passing content 
const DefaultLayout = ({ children }) => {
  const shouldRenderComponent = (usePathname() !== '/' && usePathname() !== '/about') ? true : false;

  return (
    <div>
      {shouldRenderComponent ? <HeaderNavigation /> : <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default DefaultLayout;