// File root
'use client'
import HomePage from "@/app/homepage/page"
import variables from "../styles/variables.module.scss"
import { Provider } from 'react-redux';
import { store } from "../store";
export default function Home() {
  return (
    <Provider store={store}>
      {/* <p className={`${variables["title__header"]} ${variables["heading"]} text-center`} style={{ color: variables.primaryColor }}>Hello, Next.js!</p> */}
      <HomePage />
    </Provider >
  );
}
