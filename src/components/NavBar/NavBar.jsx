import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'; // Import CSS file for styling

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/matches">Matches</Link>
        <Link to="/forums">Forums</Link>
      </div>
      <div className="navbar-user">
        <span>Welcome, {user.name}</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}