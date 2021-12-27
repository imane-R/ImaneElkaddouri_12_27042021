import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";

const SERVER = axios.create({
    baseURL: 'http://localhost:3000/'
});

let useGenericInfos = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const { data: { data: response } } = await SERVER.get(`/user/${id}`);
                setData(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(id);
    }, []);

    return {
        data
    };
}




export { useGenericInfos };