import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "../Form";
import Tasks from "../Tasks";
import Buttons from "../Buttons";


const TasksPage = () => {

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

export default TasksPage;