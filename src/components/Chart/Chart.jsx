import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = () => {
    
        <h1>Assignment Results</h1>
    
    const data = [
        {
            "id": 1,
            "name": "Assign-01",
            "marks": 60,
        },
        {
            "id": 2,
            "name": "Assign-02",
            "marks": 60,
        },
        {
            "id": 3,
            "name": "Assign-03",
            "marks": 60,
        },
        {
            "id": 4,
            "name": "Assign-04",
            "marks": 59,
        },
        {
            "id": 5,
            "name": "Assign-05",
            "marks": 59
        },
        {
            "id": 6,
            "name": "Assign-06",
            "marks": 53,
        },
        {
            "id": 7,
            "name": "Assign-07",
            "marks": 60,
        },
        {
            "id": 8,
            "name": "Assign-08",
            "marks": 60,
        }
    ]

    return (
        <div className='py-20 p-8 CartesianGrid font-bold'>
            <h1 className="text-4xl text-center font-bold py-4">Assignment Results</h1>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <AreaChart
                    width={1100}
                    height={500}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="indigo" fill="purple" />
                </AreaChart>
                {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Chart;