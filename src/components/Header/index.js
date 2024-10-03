import { MdOutlineSearch } from "react-icons/md";
import "./index.css";

const Header = (props) => {
  const { onChangetitlename } = props;

  return (
    <nav className="nav-container">
      <div className="title">
        <strong className="title-name">Notes</strong>
      </div>
      <div className="inputs-container">
        <input
          type="search"
          className="add-input"
          placeholder="Search Notes"
          onChange={onChangetitlename}
        />
        <MdOutlineSearch className="search-icon" />
      </div>
      <div className="name-logo">
        <h1 className="logo">GSV</h1>
      </div>
    </nav>
  );
};

export default Header;
