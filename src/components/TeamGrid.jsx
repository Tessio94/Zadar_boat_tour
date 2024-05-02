import styles from "../styles/TeamGrid.module.css";
import data from "../data/teamData";

const TeamGrid = () => {
  return (
    <>
      <h1 className={styles.title}>Meet Our Team</h1>
      <div className={styles.container}>
        {data.map((person) => {
          return (
            <div className={styles.imgContainer} key={person.id}>
              <img src={person.image} alt={person.name} />
              <div className={styles.cardText}>
                <h1>{person.name}</h1>
                <p>{person.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamGrid;
