import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

var dateStyle = {
    margin: '0 10px 0 0'
}

class MyDatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            endDate: moment()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }
    render() {
        return (
            <span className="datePicker-Block">
                <span style={dateStyle}>Dates:</span>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    dateFormat="MM/DD/YY"
                />
                <span className="glyphicon glyphicon-chevron-right"></span>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    dateFormat="MM/DD/YY"
                    minDate={this.state.startDate}
                />
            </span>
        );
    }
}

export default MyDatePicker;