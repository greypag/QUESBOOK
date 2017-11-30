import React from 'react';
import Districts from './districts';
import Classes from './classes';
import States from './states';
import Students from './students';
import Teachers from './teachers'
import Admins from './schoolAdmins'
import '../../../res/style/usergroups.css';

var selector = [
    { "id": "1", "title": "Districts" },
    { "id": "2", "title": "Schools" },
    { "id": "3", "title": "Classes" },
    { "id": "4", "title": "Students" },
    { "id": "5", "title": "Teachers" },
    { "id": "6", "title": "States" },
    { "id": "7", "title": "School Admins" }
];

var districts = [
    { "id": "1", "name": "Palo Alto Unified School District", "totalSchools": "3" },
    { "id": "2", "name": "Vallejo Unified School District", "totalSchools": "5" },
    { "id": "3", "name": "Mountain View School District", "totalSchools": "2" }
];

var classes = [
    { "id": "1", "name": "English II", "teacher": "Kristin Cookie", "totalStudents": "3" },
    { "id": "2", "name": "English Honors", "teacher": "David Dallowway", "totalStudents": "5" },
    { "id": "3", "name": "AP English", "teacher": "Eudice Dop", "totalStudents": "2" }
];

var states = [
    { "id": "1", "name": "California", "totalDistricts": "3" }
];

var students = [
    { "id": "1", "name": "Silvia Atueros-Cossio", "class": "English II", "email": "silvia@play.edu", "accountCreated": true },
    { "id": "2", "name": "Estefania Arodriguez", "class": "English II", "email": "estefania@play.edu", "accountCreated": false },
    { "id": "3", "name": "Stephanie Benny", "class": "English II", "email": "stephanie@play.edu", "accountCreated": true },
    { "id": "4", "name": "Aurora Cells", "class": "English II", "email": "aurora@play.edu", "accountCreated": true },
    { "id": "5", "name": "Lisa Doboa", "class": "English Honors", "email": "lisa@play.edu", "accountCreated": true },
    { "id": "6", "name": "Jennifer Eudet", "class": "English Honors", "email": "jennifer@play.edu", "accountCreated": true },
];

var teachers = [
    { "id": "1", "name": "Gabe Bruz", "class": "English II", "email": "gabe@play.edu", "accountCreated": "true" },
    { "id": "2", "name": "Camilla Costpaiuc", "class": "English II", "email": "camilla@play.edu", "accountCreated": "false" },
    { "id": "3", "name": "Lori Taims", "class": "English II", "email": "lori@play.edu", "accountCreated": "true" },
    { "id": "4", "name": "Kym Terriman", "class": "English II", "email": "kym@play.edu", "accountCreated": "true" }
];

var admins = [
    { "id": "1", "name": "Gabe Bruz", "class": "English II", "email": "gabe@play.edu", "accountCreated": "true" },
    { "id": "2", "name": "Camilla Costpaiuc", "class": "English II", "email": "camilla@play.edu", "accountCreated": "false" }
];

class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.selector[0].title
        };
    }
    handleClick(event) {
        var title = event.target.getAttribute('value');
        this.setState({ title: title });
        if (title === 'Districts')
            ReactDOM.render(<Districts districts={districts} />, document.getElementById('data-form'));
        else if (title === 'Schools')
            ReactDOM.render(<Classes classes={classes} />, document.getElementById('data-form'));
        else if (title === 'Classes')
            ReactDOM.render(<Classes classes={classes} />, document.getElementById('data-form'));
        else if (title === 'Students')
            ReactDOM.render(<Students students={students} />, document.getElementById('data-form'));
        else if (title === 'Teachers')
            ReactDOM.render(<Teachers teachers={teachers} />, document.getElementById('data-form'));
        else if (title === 'States')
            ReactDOM.render(<States states={states} />, document.getElementById('data-form'));
        else if (title === 'School Admins')
            ReactDOM.render(<Admins admins={admins} />, document.getElementById('data-form'));
    }
    render() {
        var options = this.props.selector.map(function (option, index) {
            return <li key={option.id}><a href="#" className="option" value={option.title}>{option.title}</a></li>;
        });
        return (
            <div className="btn-group selector">
                <span className="dropdown-toggle dropdown-item" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span id="selector-title">{this.state.title}</span>
                    <span className="caret"></span>
                </span>
                <ul className="dropdown-menu" onClick={(event) => this.handleClick(event)}>
                    {options}
                </ul>
            </div>
        );
    }
}

class Export extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="btn-export">Export <span className="caret"></span></button>
                <ul className="dropdown-menu" role="menu">
                    <li key="1"><a href="#">Action</a></li>
                    <li key="2"><a href="#">Another action</a></li>
                </ul>
            </div>
        );
    }
}

var modalStyle = {
    width: '300px',
    position: 'relative',
    display: 'table',
    overflowY: 'auto',
    overflowX: 'auto',
    width: 'auto',
    minWidth: '300px'
};

var modalTitleStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#192230'
};

var modalTextStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: '1.25',
    color: '#373a3c',
    margin: '10px 0'
};

class Modal extends React.Component {
    componentDidMount() {
        // $('#feedbackdialog').draggable({
        //     handle: ".modal-header",
        //     cursor: "move",
        //     containment: "parent"
        // });
    }
    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={modalStyle}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <div className="modal-title" id="myModalLabel" style={modalTitleStyle}>Add new student</div>
                        </div>
                        <div className="modal-body">
                            <div style={modalTextStyle}>Name</div>
                            <input type="text" className="form-control" placeholder="First/Last Name" />
                            <div style={modalTextStyle}>Class</div>
                            <input type="text" className="form-control" placeholder="Class Name" />
                            <div style={modalTextStyle}>Email</div>
                            <input type="text" className="form-control" placeholder="email@email.com" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class UserGroups extends React.Component {
    handleClick(event) {
        // var title = event.target.getAttribute('value');
        // console.log('click');
        $('#myModal').modal('show');
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12">
                <Modal />
                <div className="top-panel">
                    <Selector selector={selector} />
                    <button type="button" onClick={(event) => this.handleClick(event)} className="btn btn-default" id="btn-add-new">Add new</button>
                    <Export />
                </div>
                <div className="data-form" id="data-form">
                    <Districts districts={districts} />
                </div>
            </div>
        );
    }
}

export default UserGroups;
