import { useState } from "react";
import styles from "./Greeting.module.scss";

interface IGreetingNameProps {
  name?: string | null;
}

const GreetingName = ({ name = "Guest" }: IGreetingNameProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.greeterName}> Hello, {name}</div>
      <div className={styles.massage}> Welcome to our application</div>
    </div>
  );
};

const Greeting = (props: any) => {
  const { greetings } = props;
  const [name, setName] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const updateName = () => {
    setName(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {greetings.id}.{greetings.title}
      </div>
      <div className={styles.description}>{greetings.description}</div>
      <GreetingName name={name || undefined} />
      <div className={styles.greeterInput}>
        <label className={styles.label}>Enter a name:</label>
        <div className={styles.input}>
          <input
            className={styles.inputNum}
            type="text"
            value={inputValue}
            placeholder="Enter your name"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
            onClick={updateName}
            className={`${styles.updateBtn} ${
              !inputValue ? styles.buttonDisable : ""
            }`}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
