/* VENDOR */
import { useSelector } from "react-redux";

/* APPLICATION */
import { ListItem } from "./ListItem";
import { selectAllTasks } from "../../redux/features/tasksSlice";

export const Tasks: React.FC = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

