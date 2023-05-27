import { Todo } from "../model";
import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface SingleTodoProps {
    todo: Todo;
    todos: Todo[];
    setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodo }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);
    const handleDone = (id: Number) => {
        setTodo(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                }
                return todo;
            })
        );
    };
    const handleDelete = (id: Number) => {
        setTodo(
            todos.filter((todo) => {
                return todo.id !== id;
            })
        );
    };
    const handleEdit = (e: React.SyntheticEvent, id: Number) => {
        e.preventDefault();
        setTodo(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        todo: editTodo,
                    };
                } else {
                    return todo;
                }
            })
        );
        setEdit(false);
    };
    return (
        <form
            className="todos__single"
            onSubmit={(e) => handleEdit(e, todo.id)}
        >
            {edit ? (
                <input
                    ref={inputRef}
                    value={editTodo}
                    className="todos__single--text"
                    onChange={(e) => {
                        setEditTodo(e.target.value);
                    }}
                    onBlur={(e) => {
                        handleEdit(e, todo.id);
                    }}
                />
            ) : todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )}
            <div>
                <span
                    className="icon"
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(true);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
