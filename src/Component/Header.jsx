import { Container } from "react-bootstrap"

export default function Header() {
    return (
        <>
            <Container fluid md={4} className="header">
                <h5><a href="/">Home</a></h5>
            </Container>
        </>
    )
}
