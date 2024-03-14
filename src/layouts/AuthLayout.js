// layouts/AuthLayout.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthSidebar from '../components/AuthSidebar';

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <AuthSidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
