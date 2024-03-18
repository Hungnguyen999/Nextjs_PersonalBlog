'use client'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from "@/store";
import AuthenticateForm from '@/components/AuthenticateForm';


const LoginPage = () => {
  return (
    <Provider store={store}>
      <AuthenticateForm />
    </Provider>
  )
}
export default LoginPage;