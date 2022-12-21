import { Link } from 'react-router-dom';
import classes from './header.module.css';
import logo from '../assets/home-repair-symbol.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className={classes.headerContainer}>
            <div className={classes.userProfileContainer}>

            </div>
            <div className={classes.logoContainer}>
                <Link to={'/'}>
                    <img
                        src={logo}
                        height="60px"
                        width="60px"
                        alt="website's logo"
                    />
                </Link>
                <p className={classes.logoText}>House Repair <br/> Management</p>
            </div>
            <div className={classes.userProfileContainer}>
                <FontAwesomeIcon
                    className={`fa-2x ${classes.icon}`}
                    icon={faHouseChimneyUser}
                />
            </div>
        </nav>
    );
};

export default Header;
