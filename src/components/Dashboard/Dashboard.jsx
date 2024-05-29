import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const members = [
            {
              "id": 1,
              "name": "John Doe",
              "age": 28,
              "gender": "Male",
              "membership_type": "Gold",
              "join_date": "2023-01-15",
              "last_check_in": "2024-05-20"
            },
            {
              "id": 2,
              "name": "Jane Smith",
              "age": 34,
              "gender": "Female",
              "membership_type": "Silver",
              "join_date": "2022-11-23",
              "last_check_in": "2024-05-22"
            },
            {
              "id": 3,
              "name": "Michael Brown",
              "age": 45,
              "gender": "Male",
              "membership_type": "Platinum",
              "join_date": "2021-06-30",
              "last_check_in": "2024-05-25"
            },
            {
              "id": 4,
              "name": "Emily Johnson",
              "age": 22,
              "gender": "Female",
              "membership_type": "Bronze",
              "join_date": "2023-03-12",
              "last_check_in": "2024-05-19"
            },
            {
              "id": 5,
              "name": "David Lee",
              "age": 29,
              "gender": "Male",
              "membership_type": "Gold",
              "join_date": "2022-05-08",
              "last_check_in": "2024-05-21"
            },
            {
              "id": 6,
              "name": "Sarah Kim",
              "age": 31,
              "gender": "Female",
              "membership_type": "Silver",
              "join_date": "2023-09-14",
              "last_check_in": "2024-05-26"
            },
            {
              "id": 7,
              "name": "Robert Martinez",
              "age": 39,
              "gender": "Male",
              "membership_type": "Platinum",
              "join_date": "2020-08-17",
              "last_check_in": "2024-05-27"
            },
            {
              "id": 8,
              "name": "Jessica Davis",
              "age": 26,
              "gender": "Female",
              "membership_type": "Gold",
              "join_date": "2022-12-02",
              "last_check_in": "2024-05-23"
            },
            {
              "id": 9,
              "name": "James Wilson",
              "age": 50,
              "gender": "Male",
              "membership_type": "Bronze",
              "join_date": "2021-11-10",
              "last_check_in": "2024-05-18"
            },
            {
              "id": 10,
              "name": "Linda Garcia",
              "age": 27,
              "gender": "Female",
              "membership_type": "Silver",
              "join_date": "2023-04-05",
              "last_check_in": "2024-05-24"
            },
            {
              "id": 11,
              "name": "William Anderson",
              "age": 33,
              "gender": "Male",
              "membership_type": "Gold",
              "join_date": "2022-07-19",
              "last_check_in": "2024-05-17"
            },
            {
              "id": 12,
              "name": "Sophia Martinez",
              "age": 38,
              "gender": "Female",
              "membership_type": "Platinum",
              "join_date": "2021-03-25",
              "last_check_in": "2024-05-28"
            }
    ];
    
    return (
        <div>
            <LineChart
                width={1000}
                height={500}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                data={members}
            >
              <Line dataKey="id"></Line>
              <Line dataKey="age"></Line>
              <Line dataKey="gender"></Line>
              <Line dataKey="membership_type"></Line>
              <Line dataKey="join_date"></Line>
              <Line dataKey="last_check_in"></Line>
                <XAxis dataKey="name"></XAxis>
             <YAxis></YAxis>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer>

                
            </LineChart>

        </div>
    );
};

export default Dashboard;

