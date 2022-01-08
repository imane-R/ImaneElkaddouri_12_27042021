import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import { User, UserInfos, KeyData } from '../model/User';
const SERVER = axios.create({
    baseURL: 'http://localhost:3000/'
});

let useGenericInfos = () => {
    let intUser = new User();
    intUser.setLoading(true);
    const [user, setUser] = useState(intUser);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}`);
                const userInfos = new UserInfos(response.userInfos.firstName, response.userInfos.lastName, response.userInfos.age);
                const keyData = new KeyData(response.keyData.calorieCount, response.keyData.proteinCount, response.keyData.carbohydrateCount, response.keyData.lipidCount);
                let userData = new User(response.id, userInfos, response.score || response.todayScore, keyData);
                setUser(userData);
            } catch (error) {
                setUser({ hasError: true });
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
                setActivity({ hasError: true });
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
                setAverageSessions({ hasError: true });
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
                response.data = response.data.map((performance) => {
                    performance.kind = response.kind[performance.kind];
                    return performance;
                });
                setPerformance(response);
            } catch (error) {
                setPerformance({ hasError: true });
            }
        };
        fetchData(id);
    }, [id]);
    return {
        performance
    };
}

export { useGenericInfos, useActivity, useAverageSessions, usePerformance };