import { useState } from "react"
import Form from "./features/task/Form";
import Tasks from "./features/task/Tasks";
import Buttons from "./features/task/Buttons";
import Header from "./common/Header";
import Section from "./common/Section";
import Container from "./common/Container";
import { useTasks } from "./useTasks"


function App() {

  const [taskHide, setTaskHide] = useState(false);

  const toggleTaskHide = () => {
    setTaskHide(taskHide => !taskHide);
  };
  const {
    tasks,
    toggleTaskDone,
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
            taskHide={taskHide}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />}

          extraContent={<Buttons
            tasks={tasks}
            taskHide={taskHide}
            setAllDone={setAllDone}
            toggleTaskHide={toggleTaskHide} />}
        />
      </Container>
  );
}

export default App;
