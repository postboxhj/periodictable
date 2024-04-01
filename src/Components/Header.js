import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
const Header = () => {
  return (
    <div className="flex bg-blue-500 justify-between">
      <Link to="/">
        <div>
          <img className="w-14 h-14" src={logo} alt="logo" />
          
        </div>

      </Link>
      <ul className="flex font-semibold items-center">
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>

        <li className="p-2">
          <Link to="/elements">Elements</Link>
        </li>

        <li className="p-2">
          <Link to="/about">About us</Link>
        </li>

        <li className="p-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
