import React from "react";
import youTubeLogo from "../assests/youTubeLogo.png";
import fbLogo from "../assests/fbLogo.png";
import spotifyLogo from "../assests/spotifyLogo.png"
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes["footer-title"]}>The Generics</div>
            <div className={classes["footer-icons"]}>
                <ul>
                    <li>
                        <a href="https://www.youtube.com">
                            <img src={youTubeLogo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://spotify.com">
                            <img src={spotifyLogo} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com">
                            <img src={fbLogo} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;