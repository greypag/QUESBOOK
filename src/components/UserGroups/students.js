import React from 'react';

class Student extends React.Component {
    render() {
        var html = '';
        if(this.props.student.accountCreated)
            html = <li key={this.props.student.id + "-3"}><a href="#">Send Password Reset Link</a></li>;
        return (
            <div className="row">
                <div className="td">{this.props.student.name}</div>
                <div className="td">{this.props.student.class}</div>
                <div className="td">{this.props.student.email}</div>
                <div className="td">{this.props.student.accountCreated}</div>
                <div className="td">
                    <div className="btn-group">
                        <i className="fa fa-cog fa-lg dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                        <ul className="dropdown-menu" role="menu">
                            <li key={this.props.student.id + "-1"}><a href="#">Rename</a></li>
                            <li key={this.props.student.id + "-2"}><a href="#">Edit class</a></li>
                            {html}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

class Students extends React.Component {
    componentDidMount() {
        $('.fa-cog').click(function () {
            console.log($(this).css('color'));
            if($(this).css('color') == 'rgb(178, 178, 178)')
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
                    this.props.students.map(function (student) {
                        return (
                            <Student student={student} key={student.id} />
                        );
                    })
                }
            </div>
        );
    }
}

export default Students;