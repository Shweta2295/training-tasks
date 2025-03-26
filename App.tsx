import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskDetail from './components/taskDetail';
import Tasks from './components/tasks';

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/task/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
