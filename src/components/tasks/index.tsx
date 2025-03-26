import { tasks } from "../../constant";
import React from "react";

export interface ITask {
  id: number;
  title: string;
  description: string;
}

const Tasks = () => {
  return (
    <div className="homeContent container">
      {tasks.map((res) => {
        return (
          <div className="card">
            <div>{res.id}</div>
            {res.title}
            <div className="cardContent">{res.description}</div>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Tasks;