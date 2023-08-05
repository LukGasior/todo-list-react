import Form from "./features/task/Form";
import Tasks from "./features/task/Tasks";
import Buttons from "./features/task/Buttons";
import Header from "./common/Header";
import Section from "./common/Section";
import Container from "./common/Container";
import { useTasks } from "./useTasks"
import { useSelector } from "react-redux";
import { selectTasks } from "./features/task/tasksSlice";


function App() {

  const { tasks } = useSelector(selectTasks);


  const {
    //tasks,
    //toggleTaskDone,
    removeTask,
    setAllDone,
    addNewTask,
  } = useTasks();


  return (
    <Container>

      <Header
        title={"Lista zadań"}
      />

      <Section
        title={"Dodaj nowe zadanie"}
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title={"Lista zadań"}
        body={<Tasks
          tasks={tasks}

        />}

        extraContent={<Buttons
          tasks={tasks}
          setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default App;
