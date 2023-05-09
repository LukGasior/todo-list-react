import { useState } from "react"
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";
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
    <div>
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
    </div>
  );
}

export default App;
