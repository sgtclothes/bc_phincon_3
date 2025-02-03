import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counters/counterSlice";
import { addTodo } from "./features/todos/todoSlice";
import { fetchStudents } from "./features/students/studentAction";
import { useEffect, useState } from "react";

function App() {
    const [todo, setTodo] = useState("");
    const count = useSelector((state) => state.counter);
    const todos = useSelector((state) => state.todos);
    const { data, message, error, isLoading } = useSelector((state) => state.student);
    const { data: productData } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    useEffect(() => {
        dispatch({ type: "products/getAllProducts" });
    }, [dispatch]);

    console.log(productData);

    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleAddTodo = () => {
        dispatch(addTodo(todo));
        setTodo("");
    };
    return (
        <>
            <div>
                <h1>Counter</h1>
                <p>
                    Increment: <button onClick={handleIncrement}>+</button>
                </p>
                <p>
                    Decrement: <button onClick={handleDecrement}>-</button>
                </p>
                <p>Count: {count}</p>
            </div>
            <div>
                <h1>Todos</h1>
                <input type="text" placeholder="Add todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo}>{todo}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Students</h1>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
                {data?.map((student) => (
                    <p key={student.id}>{student.name}</p>
                ))}
            </div>
            <div>
                <h1>Products</h1>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productData?.map((product) => (
                            <tr key={product.id}>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.price}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
