import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <Todo form={<Form></Form>}></Todo>
        </div>
    );
}

export default App;
