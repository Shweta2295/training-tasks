import { useState } from "react";
import styles from "./Counter.module.scss";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

export interface ICounter {
  count: number;
}

const Counter = (props: any) => {
  const { taskDetails } = props;
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count === 0) return;
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {taskDetails.id}.{taskDetails.title}
      </div>
      <div className={styles.description}>{taskDetails.description}</div>
      <div className={styles.wrapper}>
        <div className={styles.countText}>{count}</div>
        <div className={styles.currentCount}>Current Count</div>
        <div className={styles.actions}>
          <RemoveOutlinedIcon
            onClick={decrement}
            className={count === 0 ? styles.disabled : ""}
          />
          <ReplayOutlinedIcon onClick={() => setCount(0)} />
          <AddOutlinedIcon onClick={() => setCount(count + 1)} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
