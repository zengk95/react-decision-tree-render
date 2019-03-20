import React, { PureComponent } from 'react';
import "./index.css";
import {
    LineChart, ScatterChart, Scatter, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer
} from 'recharts';



export class LineChartRevenueBudget extends PureComponent {
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
            <div style={{ width: '100%', height: 500, margin: 'auto' }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <LineChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" width={150} />
                        <XAxis dataKey="title" angle={-45} textAnchor="end" height={150}>
                            <Label value="Movie Title" position="bottom" offset={-10} />
                        </XAxis> />
                        <YAxis fontSize={10}>
                            <Label value="Dollars(Millions)" angle={-90} position="insideLeft" />
                        </YAxis> />
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


export class HistogramBudgetScore extends PureComponent {
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
        const data1 = {
            x: data.map(movie => movie.vote_average).slice(0,100),
            y: data.map(movie => movie.revenue).slice(0,100)
        };

        console.log(data1);

        return (
            <div style={{ width: '100%', height: 500, margin: 'auto' }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <ScatterChart width={630} height={500}>
                        <XAxis dataKey="x" name="Rating" />
                        <YAxis datKey="y" name="Revenue" />
                        <Scatter name="revenue" data={data1} />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
