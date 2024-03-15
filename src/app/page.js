// File root
import HomePage from "@/app/homepage/page"
import variables from "../styles/variables.module.scss"
export default function Home() {
  return (
    <main>
      {/* <p className={`${variables["title__header"]} ${variables["heading"]} text-center`} style={{ color: variables.primaryColor }}>Hello, Next.js!</p> */}
      <HomePage />
    </main >
  );
}
