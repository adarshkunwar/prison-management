import SideBar from '@components/Navigation/SideBar';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import UserAuthContextApi from '../ContextApi/UserContextApi';

type Props = {
  children: React.ReactNode | React.ReactElement | React.ReactElement[];
};

const Layout = ({ children }: Props) => {
  const dontShowArr = ['/login'];
  const location = useLocation().pathname;
  return (
    <>
      <UserAuthContextApi>
        {dontShowArr.includes(location) ? (
          <main className="w-screen bg-background h-screen">{children}</main>
        ) : (
          <main className="w-screen bg-background h-screen">
            <div>
              <SideBar />
            </div>
            <div className="">
              <div className="ml-64">{children}</div>
              <Toaster position="top-right" reverseOrder={true} />
            </div>
          </main>
        )}
      </UserAuthContextApi>
    </>
  );
};

export default Layout;
