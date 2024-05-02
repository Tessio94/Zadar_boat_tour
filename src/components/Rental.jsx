import styles from "../styles/Rental.module.css";
import { IoBoat } from "react-icons/io5";
import { HiPhoneIncoming } from "react-icons/hi";
import { TfiFaceSmile } from "react-icons/tfi";

const Rental = () => {
  return (
    <section className={styles.rental}>
      <div className={styles.container}>
        <h3>Plan your tour now</h3>
        <h1>Quick & easy boat rental</h1>
        <div className={styles.content}>
          <div className={styles.card}>
            <IoBoat
              style={{
                color: "var(--color-light--1)",
                fontSize: "7rem",
              }}
            />
            <h3>Select a boat</h3>
            <p>We offer a big range of boats for all your wants and needs.</p>
          </div>
          <div className={styles.card}>
            <HiPhoneIncoming
              style={{
                color: "var(--color-light--1)",
                fontSize: "7rem",
              }}
            />
            <h3>Contact us</h3>
            <p>
              Our friendly team is always here to with any questions and
              concerns.
            </p>
          </div>
          <div className={styles.card}>
            <TfiFaceSmile
              style={{
                color: "var(--color-light--1)",
                fontSize: "7rem",
              }}
            />
            <h3>Let&apos;s have fun</h3>
            <p>We offer a big range of boats for all your wants and needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rental;
