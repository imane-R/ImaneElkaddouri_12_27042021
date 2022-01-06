import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";

const SERVER = axios.create({
    baseURL: 'http://localhost:3000/'
});

let useGenericInfos = (props) => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}`);
                setUser(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(id);
    }, [id]);

    return {
        user
    };
}



let useActivity = () => {
    const [activity, setActivity] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}/activity`);
                response.sessions = response.sessions.map((session, index) => {
                    session.index = index + 1;
                    return session;
                });
                setActivity(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(id);
    }, [id]);
    return {
        activity
    };
}

let useAverageSessions = () => {
    const [averageSessions, setAverageSessions] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}/average-sessions`);
                let daysName = ['L', 'M', 'M', 'J', 'v', 'S', 'D'];
                response.sessions = response.sessions.map((session) => {
                    session.day = daysName[session.day - 1];
                    return session
                });
                setAverageSessions(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(id);
    }, [id]);
    return {
        averageSessions
    };
}

let usePerformance = () => {
    const [performance, setPerformance] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}/performance`);
                setPerformance(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(id);
    }, [id]);
    return {
        performance
    };
}

export { useGenericInfos, useActivity, useAverageSessions, usePerformance };