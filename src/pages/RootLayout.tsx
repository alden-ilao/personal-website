import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from "./RootLayout.module.css";
import { FC } from "react";

const RootLayout: FC = () => {
  return (
    <>
      <div className={`${classes["blur"]} ${classes["blur-left"]}`}></div>
      <div className={`${classes["blur"]} ${classes["blur-right"]}`}></div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

// <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
export default RootLayout;
