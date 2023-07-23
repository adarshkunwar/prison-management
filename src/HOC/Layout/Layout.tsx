import SideBar from '@components/Navigation/SideBar';
import { Toaster } from 'react-hot-toast';

type Props = {
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="w-screen bg-background h-screen">
        <div>
          <SideBar />
        </div>
        <div className="">
          <div className="ml-64">{children}</div>
          <Toaster position="top-right" reverseOrder={true} />
        </div>
      </main>
    </>
  );
};

export default Layout;
