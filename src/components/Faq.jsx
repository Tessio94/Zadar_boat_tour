import { useState } from "react";
import styles from "../styles/Faq.module.css";
import { AiOutlineDown } from "react-icons/ai";

const Faq = () => {
  const [showId, setShowId] = useState("id1");

  function handleShowId(id) {
    setShowId(showId === id ? "" : id);
  }

  function classQuestion(id) {
    return showId === id ? styles.questActive : "";
  }
  function classAnswer(id) {
    return showId === id ? styles.active : "";
  }

  return (
    <div className={styles.faqContainer}>
      <h3>Faq</h3>
      <h1>Frequently asked questions</h1>
      <p>
        Frequently Asked Questions About the Tour Booking Process on Our
        Website:
        <br /> Answers to common concerns and inquiries.
      </p>
      <div className={styles.questions}>
        <div>
          <div
            className={`${styles.question} ${classQuestion("id1")}`}
            onClick={() => handleShowId("id1")}
          >
            <h4>1. What is special about us compared to other tours?</h4>
            <AiOutlineDown className={styles.icon} />
          </div>
          <p className={`${styles.answer} ${classAnswer("id1")}`}>
            Experience breathtaking views, personalized attention, expert
            guides, and unforgettable adventures. Dive into hidden caves,
            explore wildlife-rich sanctuaries, and create cherished memories on
            our exclusive, eco-friendly boat tours.
          </p>
        </div>
        <div
          className={`${styles.question} ${classQuestion("id2")}`}
          onClick={() => handleShowId("id2")}
        >
          <h4>2. How do i find good tour deals in Zadar?</h4>
          <AiOutlineDown className={styles.icon} />
        </div>
        <p className={`${styles.answer} ${classAnswer("id2")}`}>
          Discover Zadar&apos;s wonders with budget-friendly tour deals. Immerse
          in history, marvel at scenic coastlines, and savor local cuisine.
          Enjoy expert-guided excursions and unforgettable experiences without
          breaking the bank.
        </p>
        <div
          className={`${styles.question} ${classQuestion("id3")}`}
          onClick={() => handleShowId("id3")}
        >
          <h4>3. How do i find good tour prices?</h4>
          <AiOutlineDown className={styles.icon} />
        </div>
        <p className={`${styles.answer} ${classAnswer("id3")}`}>
          Unlock unbeatable tour prices in Zadar for unforgettable adventures.
          Dive into history, soak in stunning vistas, and indulge in local
          flavors without straining your budget. Book your dream escape today!
        </p>
      </div>
    </div>
  );
};

export default Faq;
