import classes from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.containerRow}>
                <div className={classes.containerColumn}>
                    <ul>
                        <p>
                            Your Data
                        </p>
                        <li>
                            Cookies &#x2192;
                        </li>
                        <li>
                            Privacy policy &#x2192;
                        </li>
                    </ul>
                </div>
                <div className={classes.containerColumn}>
                    <ul>
                        <p>
                            Help
                        </p>
                        <li>
                            Support &#x2192;
                        </li>
                        <li>
                            FAQ &#x2192;
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${classes.containerRow} ${classes.containerCreaterInfo}`}>
                TODO Contact information
            </div>
        </footer>
    )
}

export default Footer;
