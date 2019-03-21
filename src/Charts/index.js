import React, { PureComponent } from 'react';
import "./index.css";
import {
    BarChart, LineChart, ScatterChart, Scatter, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer
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

        console.log(data);

        return (
            <div style={{ width: '100%', height: 500, margin: 'auto' }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" width={150} />
                        <XAxis dataKey="title" angle={-45} textAnchor="end" height={150}>
                            <Label value="Movie Title" position="bottom" offset={-10} />
                        </XAxis> />
                        <YAxis>
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
                        <XAxis dataKey="x" name="Rating" domain={[0, 10]} type="number">
                            <Label value="Rating" position="bottom" offset={-10} />
                        </XAxis>
                        <YAxis dataKey="y" name="Revenue">
                            <Label value="Dollars(in Millions)" angle={-90} position="insideLeft" />
                        </YAxis>
                        <Scatter name="revenue" data={data2} fill="#82ca9d" />
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

        const ratingOccurences = {};
        const ratingGridPoints = [];

        data.forEach(movie => {
            ratingOccurences[movie.vote_average] = ratingOccurences[movie.vote_average] === undefined ? 1 : ratingOccurences[movie.vote_average] + 1;
        });

        for (let rating in ratingOccurences) {
            ratingGridPoints.push({
                rating: Number(rating),
                occurences: ratingOccurences[rating]
            })
        }

        ratingGridPoints.sort(function (a, b) { return a.rating - b.rating; });


        return (
            <div style={{ width: '100%', height: 500, margin: 'auto' }}>
                <ResponsiveContainer width='100%' aspec={1}>
                    <LineChart width={630} height={500} data={ratingGridPoints}>
                        <CartesianGrid />
                        <Tooltip />
                        <XAxis dataKey="rating" name="Rating" domain={[0, 10]} type="number">
                            <Label value="Rating" position="bottom" offset={-10} />
                        </XAxis> />
                        <YAxis>
                            <Label value="Occurences" angle={-90} position="insideLeft" />
                        </YAxis>
                        <Line dataKey="occurences" type="monotone" stroke="#8884d8" activeDot={{ r: 8 }}></Line>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }

}