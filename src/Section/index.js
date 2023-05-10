

import { Wrapper, Div, Title } from "./style"

const Section = ({ title, body, extraContent }) => (
    <Wrapper>
        <Div>
            <Title>{title}
            </Title>
            {extraContent}
        </Div>
        {body}
    </Wrapper>
)

export default Section;