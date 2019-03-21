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

        const data2 = data.map(movie => (
            {
                x: Number(movie.vote_average),
                y: Number(movie.revenue)
            }));

        return (
            <div style={{ width: '100%', height: 500, margin: 'auto' }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <ScatterChart width={630} height={500}>
                        <CartesianGrid />
                        <Tooltip />
                        <XAxis dataKey="x" name="Rating" domain={[0, 10]} type="number" />
                        <YAxis dataKey="y" />

                        <Scatter name="revenue" data={data2} />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        );
    }
}


export class HistogramRatingDistribution extends PureComponent {
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


        const data1 = {};

        data.forEach(movie => {
            data1[movie.vote_average] = data1[movie.vote_average] === undefined ? 1 : data1[movie.vote_average] + 1;
        }).map( (rating, count) => {
            r
        });

        console.log("data");
        console.log(data1);

        return (
            <div style={{ width: '100%', height: 500, margin: 'auto' }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <LineChart width={630} height={500}>
                        <CartesianGrid />
                        <Tooltip />
                        <XAxis dataKey="x" name="Rating" domain={[0, 10]} type="number" />
                        <YAxis dataKey="y" />

                        <Scatter name="revenue" data={data1} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}