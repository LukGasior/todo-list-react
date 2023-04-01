import {useState} from "react"
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";

function App() {

  const [taskHide, setTaskHide] = useState(false);
  const [tasks, setTasks] = useState(
[    {
  id: 1,
  content: "Wstań",
  done: true,
},
{
  id: 2,
  content: "Umyj się",
  done: false,
},]
  );


  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
 
  }

  const toggleTaskHide = () => {
    setTaskHide(taskHide => !taskHide);
  };

  return (
    <div>
      <Container>

        <Header
          title={"Lista zadań"}
        />

        <Section
          title={"Dodaj nowe zadanie"}
          body={<Form />}
        />

        <Section
          title={"Lista zadań"}
          body={<Tasks 
            tasks={tasks} 
            taskHide={taskHide}
            removeTask={removeTask} />}

          extraContent={<Buttons
            tasks={tasks}
            taskHide={taskHide}
            toggleTaskHide={toggleTaskHide} />}
        />
      </Container>
    </div>
  );
}

export default App;
