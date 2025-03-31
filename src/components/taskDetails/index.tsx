import { useParams } from "react-router-dom";
import Counter from "../counter";
import Greeting from "../greeting";
import FormHandling from "../formHandling";

const TaskDetail = () => {
  const params = useParams();

  const renderComponent = () => {
    switch (Number(params.id)) {
      case 1:
        return <Counter />;
      case 2:
        return <Greeting />;
      case 3:
        return <FormHandling />;
      default:
        return <div>{params.id}</div>;
    }
  };

  return <>{renderComponent()}</>;
};

export default TaskDetail;
