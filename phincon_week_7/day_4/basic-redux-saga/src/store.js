import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./features/counters/counterSlice";
import todoReducer from "./features/todos/todoSlice";
import studentReducer from "./features/students/studentSlice";
import productReducer from "./features/products/productSlice";
import productSaga from "./features/products/productSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        student: studentReducer,
        product: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

[productSaga].forEach((saga) => {
    sagaMiddleware.run(saga);
});

