// import of component Todo
import Todo from "./Todo";

const Todos = ({ tasks, setTasks, searchResult }) => {
  // we load all elements in our state array todos.
  // for one element we pass our props(a string and a boolean) to a Todo component.
  return (
    <fieldset className="Todos">
      <legend>Todo List</legend>
      {searchResult().map((elem, index) => {
        return (
          <Todo
            key={index}
            index={index}
            task={elem}
            tasks={tasks}
            setTasks={setTasks}
          />
        );
      })}
    </fieldset>
  );
};

export default Todos;
