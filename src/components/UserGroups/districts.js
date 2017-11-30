import React from 'react';

class District extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="td">{this.props.district.name}</div>
                <div className="td">{this.props.district.totalSchools}</div>
                <div className="td">
                    <div className="btn-group">
                        <i className="fa fa-cog fa-lg dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                        <ul className="dropdown-menu" role="menu">
                            <li key={this.props.district.id + "-1"}><a href="#">Rename</a></li>
                            <li key={this.props.district.id + "-2"}><a href="#">Edit school list</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class Districts extends React.Component {
    componentDidMount() {
        $('.fa-cog').click(function () {
            console.log($(this).css('color'));
            if ($(this).css('color') == 'rgb(178, 178, 178)')
                $('.fa-cog').css('color', '#dddddd');
            else
                $(this).css('color', '#b2b2b2');
        });

        $(document).click(function () {
            $('.fa-cog').css('color', '#dddddd');
        });
    }
    render() {
        return (
            <div className="table">
                <div className="row">
                    <div className="td td-name">Name</div>
                    <div className="td">Teacher</div>
                    <div className="td">Total students</div>
                    <div className="td"></div>
                </div>
                <div className="row transprant-row"></div>
                {
                    this.props.districts.map(function (district) {
                        return (
                            <District district={district} key={district.id} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Districts;