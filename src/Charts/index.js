import React, { PureComponent } from 'react';
import { ResponsiveContainer } from 'recharts'
import "./index.css";

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';



export default class Charts extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data !== state.data) {
            return ({ data: props.data });
        }
        return null;
    }

    render() {
        const { data } = this.state;

        return (
            <div style={{ width: '100%', height: 900 }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <LineChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="title" angle={-45} textAnchor="end" height={150} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
