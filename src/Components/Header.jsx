import {
  BsFillBellFill,
  BsJustify,
  BsSearch,
  BsEnvelopeFill,
  BsPersonCircle,
} from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
};

export default Header;
