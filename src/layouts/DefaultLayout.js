import Header from "../components/Header";
import Footer from "../components/Footer";


// This file includes the most common layouts for 1 page. Ex: Header, Footer, Navigation ....
// use param children for passing content 
const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default DefaultLayout;