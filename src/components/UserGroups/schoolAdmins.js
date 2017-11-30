import React from 'react';

class Admin extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="td">{this.props.admin.name}</div>
                <div className="td">{this.props.admin.class}</div>
                <div className="td">{this.props.admin.email}</div>
                <div className="td">{this.props.admin.accountCreated}</div>
                <div className="td">
                    <div className="btn-group">
                        <i className="fa fa-cog fa-lg dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                        <ul className="dropdown-menu" role="menu">
                            <li key={this.props.admin.id + "-1"}><a href="#">Rename</a></li>
                            <li key={this.props.admin.id + "-2"}><a href="#">Edit class</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class Admins extends React.Component {
    componentDidMount() {
        $('.fa-cog').click(function () {
            console.log($(this).css('color'));
            if($(this).css('color') == '#b2b2b2')
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
                    <div className="td">Class</div>
                    <div className="td">Email</div>
                    <div className="td">Account created?</div>
                    <div className="td"></div>
                </div>
                <div className="row transprant-row"></div>
                {
                    this.props.admins.map(function (admin) {
                        return (
                            <Admin admin={admin} key={admin.id} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Admins;