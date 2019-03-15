import React, { PureComponent } from 'react';
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

    render() {
        const { data } = this.state;

        return (
            <LineChart
                width={600}
                height={300}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}
