/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ user }) {
    if (!user) {
        return <p>No user data available.</p>;
    }
    return (
        <>
            <Card>
                <Card.Img variant="top" src={user.avatar_url} alt={user.name} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>@{user.login}</Card.Title>
                    <Card.Text>
                        {user.bio}
                        <br />
                        <br />
                        {user.company}
                    </Card.Text>
                    <Card.Text font='numbers'>Followers: {user.followers}</Card.Text>
                    <Card.Text font='numbers'>Following: {user.following}</Card.Text>
                    <Card.Text font='numbers'>Public Repo: {user.public_repos}</Card.Text>
                    {user.blog && <Card.Text className='aTag'><a href={user.blog}>Portfolio</a></Card.Text>}
                    <Button variant="dark" onClick={() => window.open(user.html_url, "_blank")} > View Profile</Button>
                </Card.Body>
            </Card >
        </>
    );
}

export default Cards;
