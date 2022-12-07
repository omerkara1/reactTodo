import React, { useState } from "react";

function Todo(props) {
  const deleteTodo = (event) => {
    let todos = props.todoscontent;
    for (let i = 0; i < props.todoscontent.length; i++) {
      if (props.todoscontent[i].id === event.target.id) {
        todos.splice(i, 1);
        props.setTodosContent(
          todos.map((item) => {
            return item;
          })
        );
      }
    }
    todos = todos.filter((item) => item.completed === false);
    props.setCount(todos.length);
    if (todos.length === 0) {
      props.setColor("color");
    } else {
      props.setColor("");
    }
    todos = props.todoscontent;
    if (todos.length > 0) {
      props.setDisplay("");
    } else {
      props.setDisplay("display");
    }
    todos = todos.filter((item) => item.completed === true);
    if (todos.length > 0) {
      props.setHidden("");
    } else {
      props.setHidden("hidden");
    }
  };

  function placeholder(event) {
    let todos = props.todoscontent;
    for (let i = 0; i < props.todoscontent.length; i++) {
      if (props.todoscontent[i].id === event.target.id) {
        todos[i].content = event.target.value;
        props.setTodosContent(
          todos.map((item) => {
            return item;
          })
        );
      }
    }
    todos = todos.filter((item) => item.completed === false);
    props.setCount(todos.length);
    todos = props.todoscontent;
    todos = todos.filter((item) => item.completed === true);
    if (todos.length > 0) {
      props.setHidden("");
    } else {
      props.setHidden("hidden");
    }
  }

  const checkedTodo = (event) => {
    let todos = props.todoscontent;
    for (let i = 0; i < props.todoscontent.length; i++) {
      if (props.todoscontent[i].id === event.target.id) {
        props.todoscontent[i].completed
          ? (todos[i].completed = false)
          : (todos[i].completed = true);
        props.setTodosContent(
          todos.map((item) => {
            return item;
          })
        );
      }
    }
    todos = todos.filter((item) => item.completed === false);
    props.setCount(todos.length);
    if (todos.length === 0) {
      props.setColor("color");
    } else {
      props.setColor("");
    }

    todos = props.todoscontent;

    todos = todos.filter((item) => item.completed === true);
    if (todos.length > 0) {
      props.setHidden("");
    } else {
      props.setHidden("hidden");
    }
  };
  let [isCompleted, setIsCompleted] = useState(false);
  const focusTodo = (event) => {
    let todos = props.todoscontent;
    for (let i = 0; i < props.todoscontent.length; i++) {
      if (props.todoscontent[i].id === event.target.id) {
        if (props.todoscontent[i].completed === true) {
          setIsCompleted(true);
          todos[i].completed = false;
        } else if (props.todoscontent[i].completed === false) {
          setIsCompleted(false);
        }
        props.setTodosContent(
          todos.map((item) => {
            return item;
          })
        );
      }
    }
    event.target.parentElement.nextElementSibling.style.display = "none";
    event.target.parentElement.previousElementSibling.classList.remove(
      "toggle"
    );
    event.target.parentElement.previousElementSibling.style.display = "none";
    todos = todos.filter((item) => item.completed === false);
    props.setCount(todos.length);
    if (todos.length === 0) {
      props.setColor("color");
    } else {
      props.setColor("");
    }
    todos = props.todoscontent;
    todos = todos.filter((item) => item.completed === true);
    if (todos.length > 0) {
      props.setHidden("");
    } else {
      props.setHidden("hidden");
    }
  };

  function blurTodo(event) {
    let todos = props.todoscontent;
    for (let i = 0; i < props.todoscontent.length; i++) {
      if (props.todoscontent[i].id === event.target.id) {
        if (isCompleted === false) {
          todos[i].completed = false;
        } else if (isCompleted === true) {
          todos[i].completed = true;
        }
        props.setTodosContent(
          todos.map((item) => {
            return item;
          })
        );
      }
    }
    event.target.parentElement.nextElementSibling.style.display = "";
    event.target.parentElement.previousElementSibling.classList.add("toggle");
    event.target.parentElement.previousElementSibling.style.display = "";
    todos = todos.filter((item) => item.completed === false);
    props.setCount(todos.length);
    if (todos.length === 0) {
      props.setColor("color");
    } else {
      props.setColor("");
    }
    todos = props.todoscontent;

    todos = todos.filter((item) => item.completed === true);
    if (todos.length > 0) {
      props.setHidden("");
    } else {
      props.setHidden("hidden");
    }
  }

  return (
    <li
      key={props.todokey}
      className={`${props.todocompleted ? "completed" : "active"} ${
        props.filter2
      } ${props.filter}`}
    >
      <div className="view">
        <input
          id={props.todoid}
          className={`toggle `}
          type="checkbox"
          onChange={checkedTodo}
        />
        <label
          style={{
            fontSize: "24px",
            padding: "0px",
            width: "550px",
          }}
        >
          <input
            id={props.todoid}
            value={props.todocontent}
            style={{
              fontSize: "24px",
              padding: "15px",
              marginLeft: "60px",
              width: "460px",
            }}
            // 457
            className="box-shadow"
            onChange={placeholder}
            onFocus={focusTodo}
            onBlur={blurTodo}
          ></input>
        </label>

        <button
          id={props.todoid}
          onClick={deleteTodo}
          className="destroy"
        ></button>
      </div>
    </li>
  );
}

export default Todo;
