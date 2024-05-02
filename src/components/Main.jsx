import Button from "./Button";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <section className={styles.container}>
      {/* <img
        src="/src/assets/pngwing.com.png"
        className={styles.sea}
        alt="more"
      /> */}
      {/* <img
        src="/src/assets/Donat_zadar.png"
        className={styles.donat}
        alt="donat"
      /> */}
      <div className={styles.homepage}>
        <div className={styles.content}>
          <h3>Plan your tour now</h3>
          <h1>
            Save big with <span>Zara4fun </span>tours
          </h1>
          <p>
            Rent the tour of your dreams. Unbeatable prices, beautiful beaches,
            and many more amazing things to see.
          </p>
          <Button type="register">Book Tour</Button>
          <Button type="sign_in">Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
