import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  let todos;
  todos = JSON.parse(localStorage.getItem("todoscontent"));
  let allc;
  let col;
  let cou;
  let hid;
  let dis;
  let fil;
  let fil2;

  if (todos !== null) {
    todos = JSON.parse(localStorage.getItem("todoscontent"));
    allc = JSON.parse(localStorage.getItem("allchecked"));
    col = JSON.parse(localStorage.getItem("color"));
    cou = JSON.parse(localStorage.getItem("count"));
    hid = JSON.parse(localStorage.getItem("hidden"));
    dis = JSON.parse(localStorage.getItem("display"));
    fil = JSON.parse(localStorage.getItem("filter"));
    fil2 = JSON.parse(localStorage.getItem("filter2"));
  } else {
    todos = [];
    allc = 0;
    col = "";
    cou = 0;
    hid = "hidden";
    dis = "display";
    fil = "";
    fil2 = "";
  }

  const [todoscontent, setTodosContent] = useState(todos);
  const [allchecked, setAllChecked] = useState(allc);
  const [color, setColor] = useState(col);
  const [count, setCount] = useState(cou);
  const [hidden, setHidden] = useState(hid);
  const [display, setDisplay] = useState(dis);
  const [filter, setFilter] = useState(fil);
  const [filter2, setFilter2] = useState(fil2);

  useEffect(() => {
    localStorage.setItem("todoscontent", JSON.stringify(todoscontent));
    localStorage.setItem("allchecked", JSON.stringify(allchecked));
    localStorage.setItem("color", JSON.stringify(color));
    localStorage.setItem("count", JSON.stringify(count));
    localStorage.setItem("hidden", JSON.stringify(hidden));
    localStorage.setItem("display", JSON.stringify(display));
    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.setItem("filter2", JSON.stringify(filter2));
  });

  const allCompleted = (event) => {
    if (allchecked === 0) {
      let todos = todoscontent;
      for (let item of todos) {
        item.completed = true;
      }
      setTodosContent(
        todos.map((item) => {
          return item;
        })
      );
      todos = todos.filter((item) => item.completed === false);
      setAllChecked(1);
      setColor("color");
      setCount(todos.length);
      setHidden("");
    } else if (allchecked === 1) {
      let todos = todoscontent;
      for (let item of todos) {
        item.completed = false;
      }
      setTodosContent(
        todos.map((item) => {
          return item;
        })
      );
      todos = todos.filter((item) => item.completed === false);
      setAllChecked(0);
      setColor("");
      setCount(todoscontent.length);
      setCount(todos.length);
      setHidden("hidden");
    }
  };

  const clearCompleted = (event) => {
    let todos = todoscontent;
    todos = todos.filter((item) => item.completed === false);
    setTodosContent(
      todos.map((item) => {
        return item;
      })
    );
    setHidden("hidden");
    if (todos.length > 0) {
      setDisplay("");
    } else {
      setDisplay("display");
    }
  };

  const allSelected = (event) => {
    document.getElementById("all").classList.add("selected");
    document.getElementById("active").classList.remove("selected");
    document.getElementById("completed").classList.remove("selected");

    setFilter("");
    setFilter2("");
  };

  const activeSelected = (event) => {
    document.getElementById("all").classList.remove("selected");
    document.getElementById("active").classList.add("selected");
    document.getElementById("completed").classList.remove("selected");
    setFilter("ac");
    setFilter2("act");
  };

  const completedSelected = (event) => {
    document.getElementById("all").classList.remove("selected");
    document.getElementById("active").classList.remove("selected");
    document.getElementById("completed").classList.add("selected");
    setFilter("co");
    setFilter2("comp");
  };

  return (
    <div className="App">
      <section className="todoapp">
        <Header
          todoscontent={todoscontent}
          setTodosContent={setTodosContent}
          setDisplay={setDisplay}
          setCount={setCount}
          setColor={setColor}
        />

        <section className="main">
          <input className={`toggle-all ${color} `} type="checkbox" />
          <label
            htmlFor="toggle-all"
            className={` ${display} `}
            onClick={allCompleted}
          >
            Mark all as complete
          </label>

          <ul className="todo-list">
            {todoscontent.map((item, index) => {
              return (
                <Todo
                  key={index}
                  todocompleted={item.completed}
                  todocontent={item.content}
                  todoid={item.id}
                  todoscontent={todoscontent}
                  setTodosContent={setTodosContent}
                  // check={check}
                  // setCheck={setCheck}
                  count={count}
                  setCount={setCount}
                  setHidden={setHidden}
                  filter={filter}
                  filter2={filter2}
                  setDisplay={setDisplay}
                  setColor={setColor}
                />
              );
            })}
          </ul>
        </section>

        <footer className={`footer ${display}`}>
          <span className="todo-count">
            <strong>{count} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a id="all" href="#/" className="selected" onClick={allSelected}>
                All
              </a>
            </li>
            <li>
              <a id="active" href="#/" onClick={activeSelected}>
                Active
              </a>
            </li>
            <li>
              <a id="completed" href="#/" onClick={completedSelected}>
                Completed
              </a>
            </li>
          </ul>

          <button
            className={`clear-completed ${hidden}`}
            onClick={clearCompleted}
          >
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/omerkara1">Ömer Kara</a>
        </p>
      </footer>
    </div>
  );
}
export default App;
