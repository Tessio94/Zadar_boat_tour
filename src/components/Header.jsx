import { NavLink } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbSquareLetterX } from "react-icons/tb";
import { useRef } from "react";

const Header = () => {
  const sideMenu = useRef(null);

  function handleSidebar() {
    console.log(sideMenu.current.style.transform);

    if (
      sideMenu.current.style.transform === "translateX(100%)" ||
      sideMenu.current.style.transform === ""
    ) {
      sideMenu.current.style.transform = "translateX(0%)";
    } else {
      sideMenu.current.style.transform = "translateX(100%)";
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/homepage/logo.png" className={styles.logo} alt="logo" />
      </div>
      <div className={styles.navigation}>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/team">Our team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div>
      <div className={styles.rightNavContainer}>
        <div className={styles.buttonContainer}>
          <Button type="sign_in">Sign in</Button>
          <Button type="register">Register</Button>
        </div>
        <div className={styles.hambMenu}>
          <GiHamburgerMenu onClick={handleSidebar} />
        </div>
      </div>
      <div className={styles.sideMenu} ref={sideMenu}>
        <TbSquareLetterX className={styles.icon} onClick={handleSidebar} />
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/team">Our team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
