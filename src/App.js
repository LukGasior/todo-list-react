import TasksPage from "../src/features/task/TasksPage/index";
import Author from "./features/Author";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import TaskPage from "./features/task/TaskPage";

function App() {


  return (
    <BrowserRouter basename="/todo-list-react">
      <nav>
        <ul>
          <li>
            <Link to="/zadania"> Zadania </Link>
          </li>
          <li>
            <Link to="/autor">O autorze</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania">
            <TasksPage />
          </Route>
          <Route path="/autor">
            <Author />
          </Route>
        </Switch>
      </nav>

    </BrowserRouter>

  );
}

export default App;
