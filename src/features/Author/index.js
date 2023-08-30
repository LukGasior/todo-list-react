import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"






const Author = () => {

    return (

        <Container>

            <Header
                title={"O Autorze"}
            />

            <Section
                title={"Łukasz Gąsior"}
                body={<>To do list was made as my first project in React.
                    <ul>I used here:

                        <li>react</li>
                        <li>react-router</li>
                        <li>react-redux</li>
                        <li>react-saga</li>
                    </ul>
                    Enojy with testing
                </>}
            />
        </Container>
    )
};


export default Author;
