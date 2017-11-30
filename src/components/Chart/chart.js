import React from 'react';
import Chart from 'chart.js';

class MyChart extends React.Component {
    componentDidMount() {
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: this.props.type,
            data: this.props.data,
            options: this.props.options
        });
    }
    render() {
        return (
            <canvas id="myChart"></canvas>
        );
    }
}

export default MyChart;