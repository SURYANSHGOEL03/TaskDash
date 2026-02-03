import './Navbar.css';
import { FiSearch, FiHelpCircle, FiSettings } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
       
      </div>

      <nav className="navbar-center">
        <a className="nav-item active">Dashboard</a>
        <a className="nav-item">Data Stream</a>
        <a className="nav-item">Analysis</a>
        <a className="nav-item">Users</a>
      </nav>

      <div className="navbar-right">
        
        <FiSearch />
        <FiHelpCircle />
        <FiSettings />
      </div>
    </header>
  );
};

export default Navbar;

