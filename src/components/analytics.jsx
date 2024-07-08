import React, { useState } from 'react';
import Graph from './graph';
import UserData from './data'; // Ensure UserData is imported correctly

const Analytics = () => {
    
    const ids = UserData.map(data => data.id);
    const [userData, setUserData] = useState({
        labels: UserData.map(data => data.year),
        datasets: [{
           labels:"none",
           
            data: UserData.map(data => data.sales),
            tension: 0.3,
           
          
        },
        {
           
            data: UserData.map(data => data.msales), // Make sure this field exists in UserData
            borderColor: '#9fb1c1',
           
            borderWidth: 2,
            tension: 0.3,
            borderDash: [10,5],
           radius:0
           
        }
    ],
       
    });

    return (
        <div>
            <Graph chartData={userData} />
        </div>
    );
};

export default Analytics;