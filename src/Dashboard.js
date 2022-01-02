import jwt from 'jsonwebtoken';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    async function populateDash() {
        const req = await fetch('http://localhost:4000/app/dash', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
        })

        const data = req.json()
        console.log(data);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if (!user){
                localStorage.removeItem('token');
                // navigate('/signin');
            }
            else{
                populateDash();
            }
        }
    }, [])

    return <h1>Hello World</h1>
}

export default Dashboard;