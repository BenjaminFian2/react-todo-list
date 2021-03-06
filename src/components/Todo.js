//import of font awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const axios = require("axios");

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
        className="checkbox"
        type="checkbox"
        onChange={(event) => {
          handleChecked(event);
        }}
        checked={task.checked}
      />
      <div>
        <label className={task.checked ? "checked" : ""}>{task.title}</label>
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
        <FontAwesomeIcon
          icon="file-export"
          color="#117bc2"
          className="iconS"
          onClick={async () => {
            try {
              const response = await axios.post(
                `${process.env.REACT_APP_URL_API}/create`,
                {
                  title: task.title,
                  checked: task.checked,
                }
              );
            } catch (error) {
              console.log(error.message);
            }
          }}
        />
      </span>
    </div>
  );
};

export default Todo;
