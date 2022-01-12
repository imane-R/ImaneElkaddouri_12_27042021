import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import { User, UserInfos, KeyData } from '../model/User';
import { Activity, Session } from '../model/Activity';
import { AverageSessions, SessionOfAverage } from '../model/AverageSessions';
import {Performance , DataOfPerformance} from '../model/Performance'
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
    let initActivity = new Activity();
    initActivity.setLoading(true);
    const [activity, setActivity] = useState(initActivity);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}/activity`);
                const sessions = response.sessions.map((session) => new Session(session.day, session.kilogram, session.calories));
                let activity = new Activity(response.userId, sessions);
                setActivity(activity);
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
    let initAverageSessions = new AverageSessions();
    initAverageSessions.setLoading(true);
    const [averageSessions, setAverageSessions] = useState(initAverageSessions);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}/average-sessions`);
                const sessions = response.sessions.map((session) => new SessionOfAverage(session.day, session.sessionLength));
                let averageSessions = new AverageSessions(response.userId, sessions);
                setAverageSessions(averageSessions);
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
    let initPerformance = new Performance();
    initPerformance.setLoading(true);
    const [performance, setPerformance] = useState(initPerformance);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}/performance`);
                const data = response.data.map((performance) => new DataOfPerformance (performance.value, response.kind[performance.kind]));
                let performance = new Performance(response.userId, data)
                console.log(performance)
                setPerformance(performance);
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