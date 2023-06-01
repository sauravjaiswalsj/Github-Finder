import { Container } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Card from './Card';
import CardRepo from "./CardRepo";
import Header from "../Header";
import Footer from "../Footer";

const fetchGithubUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`, { mode: "cors" },
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
        return data;
    }
    else {
        throw new Error(data.message);
    }
}

const fetchGithubUserRepo = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, { mode: "cors" },
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const repos = await response.json();
    if (response.ok) {
        return repos;
    }
    else {
        throw new Error(repos.message);
    }
}

export default function User() {
    const { username } = useParams();
    const { data: user, isLoading: isUserLoading, isError: isUserError } = useQuery(['user', username], () => fetchGithubUser(username), {
        cacheTime: 120000, // Data will be cached for 2 minute
        staleTime: 60000
    });
    const { data: userRepo, isLoading: isUserRepoLoading, isError: isUserRepoError } = useQuery(['userRepo', username], () => fetchGithubUserRepo(username), {
        cacheTime: 120000, // Data will be cached for 1 minute
        staleTime: 60000
    });

    return (
        <>
            <Header />
            <Container className="UserInfo">
                <div className="githubUser">
                    {isUserLoading ? (<p>Loading...</p>) : isUserError ? (<p>Error fetching user.</p>)
                        : (<div className="gitCard">
                            <Card user={user} />
                        </div>
                        )}
                </div>
                <div className="gitRepo">
                    <h1>Repositories</h1>
                    {isUserRepoLoading ? (<p>Loading...</p>) : isUserRepoError ? (<p>Error fetching user.</p>)
                        :
                        userRepo
                            .sort((a, b) => b.stargazers_count - a.stargazers_count)
                            .map((repo) => {
                                return (<div className="gitCardRepo" key={repo.id}>
                                    <CardRepo userRepo={repo} />
                                </div>
                                )
                            })
                    }
                </div>
            </Container>
            <Footer />
        </>
    )
}
