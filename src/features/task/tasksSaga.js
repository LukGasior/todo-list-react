import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { selectTasks } from "./tasksSlice";
import { takeEvery, call, select } from "redux-saga/effects"






function* saveTasksInLocalStorageHandler() {
const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}


export function* tasksSaga() {
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}