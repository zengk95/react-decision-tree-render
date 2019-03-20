import React, { PureComponent } from 'react';
import "./index.css";
import {
    LineChart, ScatterChart, Scatter, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer
} from 'recharts';

import { scaleLog } from 'd3-scale';

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

    static getDerivedStateFromProps(props, state) {
        if (props.data !== state.data) {
            return ({ data: props.data });
        }
        return null;
    }

    render() {
        const { data } = this.state;


        const data2 = data.map(movie => ({ x: Number(movie.vote_average), y: Number(movie.revenue) }));
        // return (
        //     <ScatterChart width={730} height={250}
        //         margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <XAxis dataKey="x" name="stature" unit="cm" allowDecimals="true" type="number" />
        //         <YAxis dataKey="y" name="weight" unit="kg" />
        //         <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        //         <Legend />
        //         <Scatter name="A school" data={data2} fill="#8884d8" />
        //     </ScatterChart>
        // );

        const scale = scaleLog().base(Math.E);
        console.log(data2);
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
