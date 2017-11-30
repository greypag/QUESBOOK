import React from 'react';
import PropTypes from 'prop-types';

var brandIcon = require('../../../img/qb-logo.png');
var brandIcon2x = require('../../../img/qb-logo-2x.png');
var brandIcon3x = require('../../../img/qb-logo-3x.png');
var schoolName = 'New York School';
var abbreviation = 'NY';

const Brand = () => (
    <a className="navbar-brand" href="#">
        <img src={brandIcon} srcSet={brandIcon2x + ' 2x, ' + brandIcon3x + ' 3x'} className="qb-logo" />
    </a>
);

var schoolStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '16px',
    textAlign: 'right',
    color: '#192230',
    margin: '20px 36px 0 0'
}

var schoolNameStyle = {
    fontWeight: 'bold',
}

var abbreviationStyle = {
    width: '38px',
    height: '38px',
    borderRadius: '100px',
    backgroundColor: '#5d90e3',
    border: 'solid 1px #5d90e3',
    margin: '0 10px',
    padding: '6px',
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'center',
    color: '#ffffff'
}

const School = (props) => (
    <li style={schoolStyle} >
        <span>Welcome, </span><span style={schoolNameStyle} >{props.name}</span>
        <span style={abbreviationStyle} >{abbreviation}</span>
    </li>
);

School.propTypes = {
    name: PropTypes.string
}

School.defaultProps = {
    name: '',
}

const Hamburger = () => (
    <button type="button" className="navbar-toggle btn-hamburger">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
    </button>
);

const Header = () => (
    <header>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container-fluid">
                <div className="brand-name-wrapper">
                    <Brand />
                    <Hamburger />
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav"></ul>
                    <ul className="nav navbar-nav navbar-right">
                        <School name={schoolName} />
                    </ul>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;