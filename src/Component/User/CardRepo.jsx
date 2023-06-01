/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';


export default function CardRepo({ userRepo }) {
    if (!userRepo) {
        console.log(userRepo)
        return <p>No user data available.</p>;
    }
    return (
        <div className="CardsRepository">
            <div className="wrapper">
                <h5 className="title">{userRepo.name}</h5>
                <p className="subtitle">{userRepo.language}</p>
            </div>
            <div className="stats">
                <span>Stars: {userRepo.stargazers_count}</span>
                <span>Forks: {userRepo.forks}</span>
            </div>
            <Button variant="dark" onClick={() => window.open(userRepo.html_url, "_blank")}>
                View Profile
            </Button>
        </div>
    )
}