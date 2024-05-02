import styles from "/src/styles/Grid.module.css";

const Grid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptates consequuntur repellendus. Vel, voluptatum? Quos ratione
            laudantium tempora facilis. Illum?
          </p>
        </div>
        <img src="/assets/about/team.png" />
      </div>
      <div className={styles.gridContainer}>
        <img src="/assets/about/team2.png" />
        <div>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolores aperiam labore, nesciunt est doloribus nisi porro
            repellendus nam fugiat.
          </p>
        </div>
        <div>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolores aperiam labore, nesciunt est doloribus nisi porro
            repellendus nam fugiat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem quam excepturi vero eveniet molestiae sit
            nesciunt tempore dignissimos nobis quaerat.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolores aperiam labore, nesciunt est doloribus nisi porro
            repellendus nam fugiat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem quam excepturi vero eveniet molestiae sit
            nesciunt tempore dignissimos nobis quaerat.
          </p>
        </div>
        <img src="/assets/about/kornati.jpg" />
        <img src="/assets/about/skok.jpg" />
        <div>
          <h1>Join us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            dolores aperiam labore, nesciunt est doloribus nisi porro
            repellendus nam fugiat.
          </p>
        </div>
      </div>
      <hr style={{ borderColor: "var(--color-light--0-trans)" }}></hr>
    </div>
  );
};

export default Grid;
