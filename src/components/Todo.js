//import of font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ index, task, tasks, setTasks }) => {
  // fonction who marked a checked todo and put it at the bottom of the list.
  // it also unmark an unchecked todo and put it at the top of the list.
  const handleChecked = (elem) => {
    const obj = { ...tasks };
    const tab = obj.todos;
    const obj2 = task;
    tab.splice(index, 1);
    if (elem.target.checked) {
      obj2.checked = true;
      tab.push(obj2);
    } else {
      obj2.checked = false;
      tab.unshift(obj2);
    }
    obj.todos = tab;
    setTasks(obj);
  };
  // we load the todo with a checkbox who mark it if checked and a trash icon who delete it if clicked.
  return (
    <div className="Todo">
      <input
        type="checkbox"
        onChange={(event) => {
          handleChecked(event);
        }}
        checked={task.checked}
      />
      <div>
        <label className={task.checked ? "checked" : ""}>{task.task}</label>
      </div>

      <span>
        <FontAwesomeIcon
          icon="trash"
          color="#117bc2"
          className="iconT"
          onClick={() => {
            const obj = { ...tasks };
            const tab = obj.todos;
            tab.splice(index, 1);
            obj.todos = tab;
            setTasks(obj);
          }}
        />
      </span>
    </div>
  );
};

export default Todo;
