import {Link} from "react-router-dom";
import classes from "./header.module.css";
import logo from "../assets/home-repair-symbol.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className={classes.headerContainer}>
            <div className={classes.logoContainer}>
                <Link to={"/"}>
                <img src={logo}
                     height='80px'
                     width='80px'
                     alt="websites logo"/>
                </Link>
            </div>
            <ul className={classes.navList}>
                <li>
                    <Link to="/">Houses</Link>

                </li>
                <li>
                    <Link to="/">History</Link>
                </li>
            </ul>
            <div className={classes.userProfileContainer}>
                <FontAwesomeIcon className={`fa-2x ${classes.icon}`}
                                 icon={faUser} />
            </div>
        </nav>
    )
}

export default Header;
