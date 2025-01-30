import { useReducer, useState, useEffect } from "react";
import { todoReducer } from "../stores/todoReducer";
import initialTodos from "../jsons/todo.json";

export default function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, dispatch] = useReducer(
        todoReducer,
        localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : initialTodos
    );
    const [stateFilter, setStateFilter] = useState("all");

    useEffect(() => {
        const todosInLocalStorage = JSON.parse(localStorage.getItem("todos"));
        if (todosInLocalStorage) {
            dispatch({ type: "INIT_TODOS", payload: todosInLocalStorage });
            localStorage.setItem("todos", JSON.stringify(todosInLocalStorage));
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0 && stateFilter === "all") {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [stateFilter, todos]);

    const handleChangeTask = (e) => {
        setTask(e.target.value);
    };

    const handleToggle = (id) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const handleAddTodo = (task) => {
        dispatch({ type: "ADD_TODO", payload: task });
    };

    const handleFilter = (filter) => {
        setStateFilter(filter);
        dispatch({ type: "FILTER_TODO", payload: filter });
    };

    return (
        <div className="flex flex-col items-center h-screen mt-3">
            <h1 className="text-3xl font-bold">Todo App</h1>
            <div className="mt-5 flex">
                <input
                    onChange={(e) => handleChangeTask(e)}
                    type="text"
                    placeholder="Add a task"
                    className="border rounded p-2 mr-2"
                />
                <button
                    onClick={() => handleAddTodo(task)}
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </div>
            <div className="mt-5 w-[300px] max-w-md">
                <select
                    defaultValue="all"
                    onChange={(e) => handleFilter(e.target.value)}
                    className="mb-2 p-2 border rounded w-full"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div className="mt-5 w-[300px] max-w-md">
                {todos.map((todo) => (
                    <div key={todo.id} className="flex p-2 border-b">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggle(todo.id)}
                            className="mr-2"
                        />
                        <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.task}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
