import { useEffect, useState } from "react";
import axios from "axios";

const CachedData = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedUserData, setUserFetchedData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(
                "http://localhost:8081/users"
            );
            setFetchedData(data);
        };
        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(
                "http://localhost:8081/users/116c24b1-9425-4fe4-aec2-86ba7384733e"
            );
            setUserFetchedData(data);
        };
        getData();
    }, []);

    return (
        <div>
            <br />
            <h2>Users from local db</h2>
            {fetchedData.data && (
                <ul>
                    {fetchedData.data.map((item) => (
                        <li key={item.id}>
                            Name: {item.name}   Id: {item.id}
                        </li>
                    ))}
                </ul>
            )}
            <br />
            <h2>Users from cache/db</h2>
            {fetchedUserData.data ? <li>Name: {fetchedUserData.data.name} Source: {fetchedUserData.data.source}</li> : null}
            <br />
            <br />
        </div>
    )
}

export default CachedData