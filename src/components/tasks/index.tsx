import { tasks } from "../../constant";
import styles from "./Tasks.module.scss";

export interface ITasks {
  id: number;
  title: string;
  description: string;
}

const Tasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.taskHeading}>
        React Training Tasks
      </div>
      <div className={styles.homeContent}>
        {tasks.map((res) => {
          return (
            <div className={styles.card}>
              <div className={styles.cardHeading}>
                <div>{res.id}</div>
                <div>{res.title}</div>
              </div>
              <div className={styles.cardDescription}>{res.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
