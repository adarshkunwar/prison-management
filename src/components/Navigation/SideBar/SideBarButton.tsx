import { Link } from "react-router-dom";

type Props = {
  icon?: React.ReactNode;
  text: string;
  location: string;
};

const SideBarButton = ({ icon, text, location }: Props) => {
  return (
    <Link to={location.toLowerCase()}>
      <div className="sidebar-button-icon">{icon}</div>
      <div className="sidebar-button-text">{text}</div>
    </Link>
  );
};

export default SideBarButton;
