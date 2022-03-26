import jwt from 'jsonwebtoken';
import React, { useEffect } from "react";

const Dashboard = () => {

    async function populateDash() {
        const req = await fetch(process.env.DASHBOARD_ACCESS, {
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