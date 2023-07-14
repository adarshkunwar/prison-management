type props = {
  children: string | JSX.Element | JSX.Element[];
};

const index = ({ children }: props) => {
  return <div className=" mx-5 pt-5 ">{children}</div>;
};

export default index;
