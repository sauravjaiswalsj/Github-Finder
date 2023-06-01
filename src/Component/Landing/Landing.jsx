import { Container, Form, Button, InputGroup } from "react-bootstrap"
import Footer from "../Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    function handleUserChange(event) {
        setUser(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted ${user}`);
        navigate(`/user/${user}`)
    }
    return (
        <>
            <Container>
                <div className="containerLanding">
                    <div className="headerS">
                        <h1>GitHub Finder</h1>
                    </div>
                    <div className="sub-heading">
                        <p>Your site to find programmers quickly and easily!</p>
                    </div>
                    <div className="TextInput">
                        <form onSubmit={handleSubmit}>
                            <InputGroup className="mb-3 inputGroup">
                                <Form.Label htmlFor="text" className="inputText">Enter developer name below</Form.Label>
                                <div className="inputContainer">
                                    <Form.Control
                                        placeholder="ex: sauravjaiswalsj"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        className="inputBox"
                                        onChange={(e) => handleUserChange(e)}
                                    />
                                    <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
                                        Meet!
                                    </Button>
                                </div>
                            </InputGroup>
                        </form>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}
