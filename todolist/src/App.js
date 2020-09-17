import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import TodoItem from "./components/TodoItem";

function App() {
    return (
        <div className="App">
            <Todo form={<Form></Form>}>
                <TodoItemList></TodoItemList>
            </Todo>
        </div>
    );
}

export default App;
