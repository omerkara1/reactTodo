import React from "react";

function Header(props) {
  const keyEnter = (event) => {
    let todos = props.todoscontent;
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value !== "") {
        todos.push({
          id: (Math.random() * 56465465).toFixed(),
          content: event.target.value,
          completed: false,
        });
        props.setTodosContent(
          todos.map((item) => {
            return item;
          })
        );
        event.target.value = "";
      }
      props.setDisplay("");
    }
    todos = todos.filter((item) => item.completed === false);
    props.setCount(todos.length);
    if (todos.length === 0) {
      props.setColor("color");
    } else {
      props.setColor("");
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          onKeyDown={keyEnter}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
}

export default Header;
