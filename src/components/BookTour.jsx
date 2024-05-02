import styles from "../styles/BookTour.module.css";
import { CiLocationOn } from "react-icons/ci";
import { GiSpeedBoat } from "react-icons/gi";
import { BsPeople } from "react-icons/bs";
import { BsCalendar2Date } from "react-icons/bs";
import { BsCreditCard2Back } from "react-icons/bs";
import { useState } from "react";

const BookTour = () => {
  const [formData, setFormData] = useState({
    location: "",
    boat: "",
    number: "",
    payment: "",
    date: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (
      formData.location === "" ||
      formData.boat === "" ||
      formData.number === "" ||
      formData.payment === "" ||
      formData.date === ""
    ) {
      setShowMessage(true);
    } else {
      setShowOverlay(true);
    }
    console.log(formData);
  };

  return (
    <section id={styles.booking}>
      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.overlayContainer}>
            <div className={styles.overlayTitle}>
              <h1>Complete reservation</h1>
              <button onClick={() => setShowOverlay(false)}>X</button>
            </div>
            <div className={styles.overlayContent}>
              <div className={styles.leftContent}>
                <p>
                  Location: <b>{formData.location}</b>
                </p>
                <p>
                  Total people: <b>{formData.number}</b>
                </p>
                <p>
                  Date: <b>{formData.date}</b>
                </p>
                <p>
                  Boat: <b>{formData.boat}</b>
                </p>
              </div>
              <div className={styles.rightContent}>
                <img
                  src={`/src/assets/brodovi/${formData.boat}.jpg`}
                  alt="boat"
                  className={styles.boatImg}
                />
              </div>
            </div>
            <hr />
            <div className={styles.formOverlay}>
              <h1>Personal information</h1>
              <form action="">
                <div className={styles.formBox}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Write your first name..."
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Write your last name..."
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phonen"
                    name="phonen"
                    placeholder="Enter your phone number..."
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="18"
                    min={18}
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address..."
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                  />
                </div>
                <div className={styles.formBox}>
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    placeholder="Enter your zip code..."
                  />
                </div>
              </form>
            </div>
            <div className={styles.overlayBtn}>
              <button>Reserve now</button>
            </div>
          </div>
        </div>
      )}
      <div className={styles.bookingContainer}>
        <div className={styles.formContainer}>
          <h1>Book a Tour</h1>
          {showMessage && (
            <h2 className={styles.message}>All fields required!</h2>
          )}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="location">
                <CiLocationOn style={{ color: "#fffff", fontSize: "1.6rem" }} />{" "}
                Select tour location
              </label>
              <select id="location" name="location" onChange={handleChange}>
                <option hidden>Select tour location</option>
                <option value="Preko">Preko</option>
                <option value="Ist">Ist</option>
                <option value="Kornati">Kornati</option>
                <option value="Iž">Iž</option>
                <option value="Sestrunj">Sestrunj</option>
              </select>
            </div>
            <div>
              <label htmlFor="boat">
                <GiSpeedBoat
                  style={{
                    color: "#fffff",
                  }}
                />
                {"  "}
                Select tour boat
              </label>
              <select name="boat" id="boat" onChange={handleChange}>
                <option hidden>Select tour boat</option>
                <option value="Mercan34">Mercan34</option>
                <option value="Camaro1000">Camaro1000</option>
                <option value="Cobra499">Cobra499</option>
                <option value="Saver690">Saver690</option>
                <option value="Nautika 500">Nautika 500</option>
              </select>
            </div>
            <div>
              <label htmlFor="number">
                <BsPeople
                  style={{
                    color: "#fffff",
                  }}
                />{" "}
                Select number of people
              </label>
              <select name="number" id="number" onChange={handleChange}>
                <option hidden>Select number of people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">4</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div>
              <label htmlFor="payment">
                <BsCreditCard2Back
                  style={{
                    color: "#fffff",
                  }}
                />{" "}
                Select payment method
              </label>
              <select name="payment" id="payment" onChange={handleChange}>
                <option hidden>Select payment method</option>
                <option value="Credit card">Credit Card</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div className={styles.formBox} onChange={handleChange}>
              <label htmlFor="date">
                <BsCalendar2Date
                  style={{
                    color: "#fffff",
                  }}
                />{" "}
                Select the date
              </label>
              <input type="date" id="date" name="date" />
            </div>
            <button className={styles.formBtn}>Book</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookTour;
