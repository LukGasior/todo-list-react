import Form from "./features/task/Form";
import Tasks from "./features/task/Tasks";
import Buttons from "./features/task/Buttons";
import Header from "./common/Header";
import Section from "./common/Section";
import Container from "./common/Container";


function App() {


  return (
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
        body={<Tasks />}

        extraContent={<Buttons />}
      />
    </Container>
  );
}

export default App;
