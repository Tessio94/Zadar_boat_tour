import styles from "/src/styles/ContactForm.module.css";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TbLocationSearch } from "react-icons/tb";
import Button from "./Button";

const Contact = () => {
  return (
    <>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Need additional information?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio
            quia voluptatem quos voluptatibus ut sunt hic unde. Unde voluptates
            natus tempore expedita porro illo cum velit, incidunt similique et.
          </p>
          <div className={styles.links}>
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
            <a href="">
              {" "}
              <TbLocationSearch
                style={{
                  color: "var(--color-dark--2)",
                  width: "16px",
                  height: "18px",
                }}
              />
              Zadar, Croatia
            </a>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.formBox}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="E.g. 'John Doe'"
              />
            </div>
            <div className={styles.formBox}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="youremail@example.com"
              />
            </div>
            <div className={styles.formBox}>
              <label htmlFor="name">Full Name</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <Button type="register">Send</Button>
          </form>
        </div>
      </div>
      ;
    </>
  );
};

export default Contact;
