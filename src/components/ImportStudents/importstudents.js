import React from 'react';
import Dropzone from 'react-dropzone';

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
class Choose extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle btn-round" data-toggle="dropdown" id="btn-choose" style={btnRound}>Choose file</button>
            </div>
        );
    }
}
class Send extends React.Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle btn-round" data-toggle="dropdown" id="btn-choose" style={btnRound}>Send invites</button>
            </div>
        );
    }
}
class Drop extends React.Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)} style={dropzoneStyle}>
                        <p style={dropTextStyle}>Drop file in here</p>
                        <ul style={listStyle}>
                            {
                                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                            }
                        </ul>
                        <Choose />
                    </Dropzone>
                </div>
            </section>
        );
    }
}

var stepTextStyle = {
    fontFamily: '',
    fontSize: '21px',
    textAlign: 'left',
    lineHeight: '1.2',
    color: '#192230',
    margin: '30px 0'
};
var dropTextStyle = {
    fontFamily: '',
    fontSize: '21px',
    textAlign: 'center',
    lineHeight: '1.2',
    color: '#192230',
    margin: '20px 0'

}
var stepStyle = {
    fontWeight: 'bold'
};
var btnRound = {
    height: '30px',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1.14',
    textAlign: 'center',
    color: '#ffffff',
    borderRadius: '100px',
    backgroundColor: '#213a62',
    margin: '20px 0px 20px'
};
var importStudents = {
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    width: '490px',
    minHeight: '657px',
    borderRadius: '5px',
    border: 'solid 1px rgba(0, 0, 0, 0.1)'
};
var h1TextStyle = {
    fontSize: '26.3px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textAlign: 'left',
    color: '#192230'
};
var dropzoneStyle = {
    width: '450px',
    minHeight: '175px',
    border: 'dashed 1px #213a62',
    textAlign: 'center',
    listStyle: 'none'
}
var listStyle = {
    listStyle: 'none',
    textAlign: 'center',
    padding: '0px'
}
var filterStyle = {
    display: 'flex',
    alignItems: 'center'
}

const Dashboard = () => (
    <div className="importStudents" style={importStudents}>
        <div style={h1TextStyle}>Import Students</div>
        <div className="step" style={stepTextStyle}>
            <div><span className="text-style-1" style={stepStyle}>Step 1: </span>Export Current file</div></div>
        <div style={filterStyle} >Fliter by: <Export /></div>
        <div className="step" style={stepTextStyle}>
            <div><span className="text-style-1" style={stepStyle}>Step 2: </span>Add aditional rows to the file</div>
        </div>
        <div className="step" style={stepTextStyle}>
            <div><span className="text-style-1" style={stepStyle}>Step 3: </span>Import new file to add users</div>
        </div>
        <Drop />
        <div className="step" style={stepTextStyle}><span className="text-style-1" style={stepStyle}>Step 4: </span>Send invites</div>
        <Send />
    </div>
);


export default Dashboard;
