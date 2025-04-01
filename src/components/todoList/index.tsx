import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TodoList.module.scss";

export interface ITodoList {
  id: number;
  name: string;
}

const TodoList = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState<ITodoList[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<ITodoList | null>(null);

  const handleSubmit = () => {
    if (selectedTask) {
      const updateValue = task.map((val) => {
        if (selectedTask?.id === val?.id) {
          return { ...val, name: inputValue };
        }
        return val;
      });
      setTask(updateValue);
      setSelectedTask(null);
    } else {
      setTask([...task, { id: Math.random(), name: inputValue }]);
    }
    setInputValue("");
  };

  const handleUpdate = (value: ITodoList) => {
    setSelectedTask(value);
    setInputValue(value.name);
  };

  const handleDelete = (index: number) => {
    // const newTodos = [...task];
    // newTodos.splice(index, 1);     // using splice method
    // setTask(newTodos);
    const updateTasks = task.filter((_, i) => i !== index);
    setTask(updateTasks);
  };

  return (
    <div>
      <div onClick={() => navigate("/")} className={styles.backLink}>
        <KeyboardBackspaceOutlinedIcon />
        <div> {`Back to Tasks`}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>{`4. Todo List`}</div>
        <div className={styles.description}>
          {`Build a simple todo list where users can add and remove tasks using state and list rendering.`}
        </div>
        <div className={styles.addTask}>
          <label className={styles.label}>{`Add a new task:`}</label>
          <div className={styles.inputField}>
            <input
              className={styles.inputData}
              value={inputValue}
              type="text"
              name="name"
              placeholder="enter a new task"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className={`${styles.addBtn} ${
                !inputValue ? styles.btnDisable : ""
              }`}
              onClick={handleSubmit}
            >
              {selectedTask ? `Edit` : `Add`}
            </button>
          </div>
        </div>
        <div className={styles.taskId}>
          <div className={styles.taskNum}>{`Tasks:(${task?.length})`}</div>
          {!task.length ? (
            <div className={styles.tasks}>{`No tasks yet. Add one Above!`}</div>
          ) : (
            task.map((val, index) => {
              return (
                <div
                  key={val.id}
                  className={`${styles.taskData} ${
                    selectedTask?.id === val?.id ? styles.highlighted : ""
                  }`}
                >
                  {val.name}
                  <div>
                    <EditOutlinedIcon onClick={() => handleUpdate(val)} />
                    <DeleteForeverIcon onClick={() => handleDelete(index)} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
