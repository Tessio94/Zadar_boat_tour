import styles from "/src/styles/Ad.module.css";

const Ad = () => {
  return (
    <div className={styles.container}>
      <h1>
        Save big with our <span>cheap</span> and beautiful tours
      </h1>
      <h3>
        Modern boats. Local guides. Contact <span>24/7</span>
      </h3>
    </div>
  );
};

export default Ad;
