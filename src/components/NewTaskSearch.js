import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewTaskSearch = ({ tasks, setTasks }) => {
  // we load an input and a button.
  //When clicked the button take the value of the input and put it to our state.
  return (
    <div className="NewTaskSearch">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (tasks.search === "") {
            alert("You cannot send a void task");
          } else {
            const obj = { ...tasks };
            const tab = obj.todos;
            const obj2 = {
              task: tasks.search,
              checked: false,
            };
            tab.unshift(obj2);
            obj.todos = tab;
            obj.search = "";
            setTasks(obj);
          }
        }}
      >
        <input
          className="bar"
          type="text"
          value={tasks.search}
          onChange={(event) => {
            const obj = { ...tasks };
            obj.search = event.target.value;
            setTasks(obj);
          }}
        />
        <FontAwesomeIcon icon="search" color="#117bc2" className="searchIcon" />
        <input className="submit" type="submit" value="Add task" />
      </form>
    </div>
  );
};

export default NewTaskSearch;