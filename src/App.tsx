import { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAdd = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (todo.length === 0) return;
        setTodos([
            ...todos,
            { id:Math.floor( Math.random() * 1000000000), todo, isDone: false },
        ]);
        console.log(todos)
        setTodo("");
    };
    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
