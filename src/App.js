import { useState } from "react"
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";

function App() {

  const [taskHide, setTaskHide] = useState(false);
  const [tasks, setTasks] = useState(
    []
  );

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));

  };

  const toggleTaskHide = () => {
    setTaskHide(taskHide => !taskHide);
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };


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
