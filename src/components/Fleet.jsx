import styles from "../styles/Fleet.module.css";
import Button from "./Button";
import data from "../data/fleetData";
import { useState } from "react";

const Fleet = () => {
  const [boat, setBoat] = useState(0);

  return (
    <section className={styles.fleet}>
      <div className={styles.title}>
        <h3>Vehicle Models</h3>
        <h1>Our rental fleet</h1>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.boatsContainer}>
          {data.map((boat, i) => {
            return (
              <button
                key={boat.id}
                className={styles}
                onClick={() => setBoat(i)}
              >
                {boat.name}
              </button>
            );
          })}
        </div>
        <div className={styles.vehiclesContainer}>
          <div className={styles.images}>
            <img src={`${data[boat].image}`} alt={`${data[boat].name}`} />
          </div>
          <div className={styles.info}>
            <div className={styles.price}>{data[boat].price}</div>
            <div className={styles.technicalities}>
              <div>
                <span>Length</span>
                <span>{data[boat].length}</span>
              </div>
              <div>
                <span>Capacity</span>
                <span>{data[boat].capacity}</span>
              </div>
              <div>
                <span>Power</span>
                <span>{data[boat].power}</span>
              </div>
            </div>
            <Button type="register">Reserve now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
