import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useState } from "react";
import styles from "./TodoList.module.scss";

export interface ITodoList {
  id: number;
  name: string;
  isCompleted: boolean;
}

const TodoList = (props: any) => {
  const { listData } = props;
  const [task, setTask] = useState<ITodoList[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<ITodoList | null>(null);

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
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
      setTask([
        ...task,
        { id: Math.random(), name: inputValue, isCompleted: false },
      ]);
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

  const handleComplete = (id: number) => {
    const isDone = task.map((val) => {
      if (id === val?.id) {
        return { ...val, isCompleted: !val.isCompleted };
      } else {
        return val;
      }
    });
    setTask(isDone);
    // setTask(
    //   task.map((val) =>
    //     val.id === value ? { ...val, isCompleted: !val.isCompleted } : val
    //   )
    // )
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          {listData.id}.{listData.title}
        </div>
        <div className={styles.description}>{listData.description}</div>
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
              disabled={!inputValue}
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
                  <div className={styles.checkBox}>
                    <input
                      type="checkbox"
                      name="text"
                      value={val.id}
                      onChange={() => handleComplete(val.id)}
                      checked={val.isCompleted}
                    />
                    <div
                      className={`${styles.isDone} ${
                        val.isCompleted ? styles.completed : ""
                      }`}
                    >
                      {val.name}
                    </div>
                  </div>
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
