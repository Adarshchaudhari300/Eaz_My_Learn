import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">


            <h1 className='heading'>EaZ My Learn</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/subject">My-Courses</Link>
            </div>
            <div className='login'>
                <Link to="/login">Login</Link>
            </div>


        </div>
    );
}

export default Navbar;