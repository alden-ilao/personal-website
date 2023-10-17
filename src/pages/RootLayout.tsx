import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FC } from "react";

const RootLayout: FC = () => {
  return (
    <div className="relative">
      <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
      <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

      <Header />
      <Outlet></Outlet>
      <Footer />
      <div id="DELETE" className="flex h-[300vh] items-center justify-center">
        <p id="DELETE-CONTENT">DELETE</p>
      </div>
    </div>
  );
};

export default RootLayout;
