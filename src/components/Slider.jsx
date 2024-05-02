import styles from "../styles/Slider.module.css";
import people from "../data/data.js";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";

const Testimonials = () => {
  const [personIndex, setPersonIndex] = useState(1);

  return (
    <div className={styles.container}>
      <h1>What People Say About Us</h1>
      {people.map((person, i) => {
        const { image, name, title, quote } = person;

        let position = "nextSlide";

        if (i === personIndex) position = "activeSlide";

        if (i === personIndex - 1) position = "lastSlide";

        if (personIndex === people.length) setPersonIndex(0);

        if (personIndex < 0) setPersonIndex(people.length - 1);

        return (
          <div className={`${styles.card} ${styles[position]}`} key={i}>
            <img src={image} alt={name} />
            <div className={styles.text}>
              <h1>{name}</h1>
              <h3>{title}</h3>
              <p>{quote}</p>
            </div>
          </div>
        );
      })}
      <button
        className={styles.left}
        onClick={() => setPersonIndex(personIndex - 1)}
      >
        <FiChevronLeft />
      </button>
      <button
        className={styles.right}
        onClick={() => setPersonIndex(personIndex + 1)}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Testimonials;
