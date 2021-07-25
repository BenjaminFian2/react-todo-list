import "./App.css";

// import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import NewTaskSearch from "./components/NewTaskSearch";

// import state
import { useState } from "react";

// import and add font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faListAlt,
  faTrash,
  faSearch,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrash, faSearch, faFileExport);

const axios = require("axios");

// a fonction for call all tasks allready save in our database
const getTasks = async () => {
  const obj = {
    darkMode: false,
    search: "",
    todos: [],
  };
  const response = await axios.get(`${process.env.REACT_APP_URL_API}/`);
  obj.todos = response.data;
  return obj;
};

function App() {
  //initialisation of a state who's an object with a boolean, a string and an array.
  const [tasks, setTasks] = useState({
    search: "",
    darkMode: false,
    todos: [],
  });

  console.log(tasks);

  //a fonction who return all result who match with our search.
  const searchResult = () => {
    const search = [];
    for (let i = 0; i < tasks.todos.length; i++) {
      if (tasks.todos[i].task.indexOf(tasks.search) !== -1) {
        search.push(tasks.todos[i]);
      }
    }
    return search;
  };

  // a fonction to enable the dark mode or the light mode
  const mode = (mode) => {
    const obj = { ...tasks };
    if (mode === "night") {
      obj.darkMode = true;
    } else {
      obj.darkMode = false;
    }
    setTasks(obj);
  };

  // console.log(tasks);

  //transfert of our props (initial state value and a setter for our state) to a Todos component and a NewTaskSearch component.
  return (
    <div className={tasks.darkMode ? "App night" : "App day"}>
      <Header mode={mode} tasks={tasks} />
      <hr />
      <Todos tasks={tasks} setTasks={setTasks} searchResult={searchResult} />
      <NewTaskSearch tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

export default App;
