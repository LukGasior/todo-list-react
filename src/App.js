import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  {
    id: 1,
    content: "Wstań",
    done: true,
  },
  {
    id: 2,
    content: "Umyj się",
    done: false,
  },
];

const taskHide = false;

function App() {
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
        body={<Tasks tasks={tasks} taskHide={taskHide} />}
        extraContent={<Buttons tasks={tasks} taskHide={taskHide} />}
        />
      </Container>
    </div>
  );
}

export default App;
