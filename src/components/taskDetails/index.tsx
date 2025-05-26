import { useParams } from "react-router-dom";
import Counter from "../pages/counter";
import Greeting from "../pages/greeting";
import FormHandling from "../pages/formHandling";
import TodoList from "../pages/todoList";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import styles from "./TaskDetail.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tasks } from "../../constant";
import OrderSunday from "../pages/orderSundae";
import UserTodo from "../pages/userTodo";

const TaskDetail = () => {
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState<any>({});
  const params = useParams();
  const { id } = params;

  const getDetailsFunction = (id: string) => {
    const findDetails = tasks.find((ele) => ele.id === Number(id));
    setFetchData(findDetails);
  };

  // const abc = tasks.filter((e,i) => {
  //   return {}
  // })
  // console.log("abc==", abc);

  useEffect(() => {
    if (id) getDetailsFunction(id);
  }, []);

  const renderComponent = () => {
    switch (Number(params.id)) {
      case 1:
        return <Counter taskDetails={fetchData} />;
      case 2:
        return <Greeting greetings={fetchData} />;
      case 3:
        return <FormHandling formHandles={fetchData} />;
      case 4:
        return <TodoList listData={fetchData} />;
      case 5:
        return <OrderSunday />;
      case 6:
        return <UserTodo />;
      default:
        return <div>{params.id}</div>;
    }
  };

  return (
    <div>
      <div onClick={() => navigate("/")} className={styles.backLink}>
        <KeyboardBackspaceOutlinedIcon />
        <div> Back to Tasks</div>
      </div>
      {renderComponent()}
    </div>
  );
};

export default TaskDetail;
