import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
    return (
        <ul className="todos">
            {todos.map((todo) => (
                <SingleTodo todo={todo} 
                key={String(todo.id)}
                todos={todos} 
                setTodo={setTodos}/>
            ))}
        </ul>
    );
};

export default TodoList;
