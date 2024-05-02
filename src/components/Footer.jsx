import styles from "/src/styles/Footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.description}>
            <div>
              <h3>Reserve your tour</h3>
              <p>
                We offers a big range of boat for all your needs.
                <br /> We have the perfect boat to meet your needs.
              </p>
            </div>
            <div>
              <a href="tel: +(123)-456-789" className={styles.link}>
                <BsTelephone
                  style={{
                    color: "var(--color-dark--2)",
                    width: "16px",
                    height: "18px",
                  }}
                />{" "}
                (123)-456-789
              </a>
              <a href="mailto:boattourszd@gmail.com" className={styles.link}>
                <AiOutlineMail
                  style={{
                    color: "var(--color-dark--2)",
                    width: "16px",
                    height: "18px",
                  }}
                />{" "}
                boattourszd@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={styles.hoursContainer}>
          <h1 className={styles.title}>Working hours</h1>
          <div className={styles.hours}>
            <p>
              Monday - Saturday: <span>8:00 - 21:00</span>
            </p>
            <p>
              Sunday: <span>9:00 - 18:00</span>
            </p>
          </div>
        </div>
        <div className={styles.socials}>
          <p>Find us on social media</p>
          <div className={styles.icons}>
            <a href="https://www.instagram.com" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <BsFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
