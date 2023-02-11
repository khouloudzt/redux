import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
function Task({ el, checkToDo, deleteToDo }) {
  const dispatch = useDispatch();
  var now = new Date();
  return (
    <div className="todo card d-flex justify-content-center align-items-center mb-3">
      <div className={el.isDone ? "d-flex align-items-center  done" : "d-flex align-items-center notDone"}>
        <div>
          <a href="#">
            <span className="w-40 avatar gd-primary">S</span>
          </a>
        </div>
        <div className="flex">
          <a href="#" className="item-author text-color">
          Ahmed Chachia
          </a>
          <div className="item-except text-muted text-sm h-1x overflow-clip">{el.name}</div>
        </div>
          <div className="item-except text-muted text-sm h-1x overflow-clip">{now.toLocaleDateString()} {now.toLocaleTimeString()}</div>
      </div>

      <Button
        variant={el.isDone ? "success" : "outline-secondary"}
        className="m-3"
        onClick={() => checkToDo({ ...el, isDone: !el.isDone })}
      >
        <i className="fas fa-check"></i>
      </Button>
      <Button
        variant="outline-danger"
        className="m-3"
        onClick={() => dispatch(deleteToDo(el.id))}
      >
        <i className="fas fa-times"></i>
      </Button>
    </div>
  );
}
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
function Task({ el, checkToDo, deleteToDo }) {
  const dispatch = useDispatch();
  var now = new Date();
  return (
    <div className="todo card d-flex justify-content-center align-items-center mb-3">
      <div className={el.isDone ? "d-flex align-items-center  done" : "d-flex align-items-center notDone"}>
        <div>
          <a href="#">
            <span className="w-40 avatar gd-primary">S</span>
          </a>
        </div>
        <div className="flex">
          <a href="#" className="item-author text-color">
          Ahmed Chachia
          </a>
          <div className="item-except text-muted text-sm h-1x overflow-clip">{el.name}</div>
        </div>
          <div className="item-except text-muted text-sm h-1x overflow-clip">{now.toLocaleDateString()} {now.toLocaleTimeString()}</div>
      </div>

      <Button
        variant={el.isDone ? "success" : "outline-secondary"}
        className="m-3"
        onClick={() => checkToDo({ ...el, isDone: !el.isDone })}
      >
        <i className="fas fa-check"></i>
      </Button>
      <Button
        variant="outline-danger"
        className="m-3"
        onClick={() => dispatch(deleteToDo(el.id))}
      >
        <i className="fas fa-times"></i>
      </Button>
    </div>
  );
}

export default Task;