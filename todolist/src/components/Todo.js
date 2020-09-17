import React from "react";
import "./todo.css";

const Todo = ({ form, children }) => {
    return (
        <main className="todo_wrap">
            <div className="title">오늘 할 일</div>
            <section className="form_wrapper">{form}</section>
            <section className="todos_wrapper">{children}</section>
        </main>
    );
};

export default Todo;
