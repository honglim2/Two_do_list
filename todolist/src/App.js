import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
function App() {
    return (
        <div className="App">
            <Todo form={<div>이쪽은 form을 보여주는 부분이다.</div>}>
                이쪽은 children을 보여주는 부분이다.
            </Todo>
        </div>
    );
}

export default App;
