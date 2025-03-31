import { useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
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

const Greeting = () => {
  const [name, setName] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  const updateName = () => {
    setName(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <div onClick={() => navigate("/")} className={styles.backLink}>
        <KeyboardBackspaceOutlinedIcon />
        <div> Back to Tasks</div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>2.Greeting Component</div>
        <div className={styles.description}>
          Create a greeting component that takes a name as a prop and displays
          personalized massage.
        </div>
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
    </div>
  );
};

export default Greeting;
