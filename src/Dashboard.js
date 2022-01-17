import jwt from 'jsonwebtoken';
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    async function populateDash() {
        const req = await fetch('https://auth-havi.netlify.app/app/dash', {
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

    return <h1>Dashboard</h1>
}

export default Dashboard;