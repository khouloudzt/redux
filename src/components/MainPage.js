import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteToDo, todoIsDone } from "../redux/action";
import Tasks from './tasks/Tasks';
function MainPage({search}) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todolist);
  const filterToDo = useSelector((state) => state.filter);
  const [mytodo, setMyToDo] = useState("");
  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: todo.length + 1, name: mytodo, isDone: false }));
    e.target.elements[0].value = "";
  };
  const checkToDo = (data) => {
    dispatch(todoIsDone(data));
  };

  return (
    <div className="container my-3 card">
      <Form
        onSubmit={(e) => saveHandler(e)}
        className="d-flex justify-content-center align-items-star my-3 "
      >
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter your todo"
            defaultValue=""
            onChange={(e) => setMyToDo(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="dark" className="ms-3" type="submit">
          Save
        </Button>
      </Form>
      {filterToDo.length < todo.length
        ? filterToDo?.filter(el=> el.name.toLowerCase().includes(search.toLowerCase())).map((el) => (
            <Tasks el={el} checkToDo={checkToDo} deleteToDo={deleteToDo} />
          ))
        : todo?.filter(el=> el.name.toLowerCase().includes(search.toLowerCase())).map((el) => (
          <Tasks el={el} checkToDo={checkToDo} deleteToDo={deleteToDo} />
        ))}
    </div>
  );
}

export default MainPage;