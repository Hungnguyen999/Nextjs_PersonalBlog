// layouts/AuthLayout.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthSidebar from '../components/AuthSidebar';

import { Provider } from 'react-redux';
import { store } from "@/store";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
