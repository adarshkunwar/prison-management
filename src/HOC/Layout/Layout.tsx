// import { useState } from "react";
// import Footer from '../../components/Navigation/Footer';
// import Header from '../../components/Navigation/Header/Header';
import SideBar from '../../components/Navigation/SideBar';

type Props = {
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};
const Layout = ({ children }: Props) => {
  // const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <>
      <main className="w-screen bg-background h-screen">
        <div>
          <SideBar />
        </div>
        <div className="">
          <div className="fixed w-full">{/* <Header /> */}</div>
          <div className="ml-64">{children}</div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
