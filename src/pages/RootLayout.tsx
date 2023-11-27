import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { FC } from "react";
import ActiveSectionContextProvider from "../context/active-section-context";

const RootLayout: FC = () => {
  return (
    <div className="relative">
      <div className="absolute right-[11rem] top-[-12rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
      <div className="absolute left-[-35rem] top-[-12rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      <ActiveSectionContextProvider>
        <Header />
        <Outlet></Outlet>
      </ActiveSectionContextProvider>
    </div>
  );
};

export default RootLayout;
