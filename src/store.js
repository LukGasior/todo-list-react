import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/task/tasksSlice";
import { tasksSaga } from "./features/task/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,

    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(tasksSaga);

export default store;