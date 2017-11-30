import React from 'react';

var brandIcon = require('../../../img/qb-logo.png');
var brandIcon2x = require('../../../img/qb-logo-2x.png');
var brandIcon3x = require('../../../img/qb-logo-3x.png');
var brandIcon4x = require('../../../img/qb-logo-4x.png');

var footerStyle = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60px',
    lineHeight: '60px',
    backgroundColor: '#213a62',
    overflow: 'hidden'
}

var brandIconStyle = {
    width: '34px',
    height: '33.4px',
    margin: '0 0 0 12px'
}

var linkStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    margin: '0 10px'
}

var copyRightStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#919DB1',
    margin: '0 10px',
    padding: '0 20px 0 0'
}

const BrandIcon = () => (
    <a href="#">
        <img src={brandIcon4x} style={brandIconStyle} />
    </a >
);

const Others = () => (
    <ul className="nav navbar-nav navbar-right">
        <li style={linkStyle}>Help</li>
        <li style={linkStyle}>Contact Us!</li>
        <li style={linkStyle}>Terms of Use</li>
        <li style={copyRightStyle}>© 2017 Quesbook USA, Inc. </li>
    </ul>
);

const Footer = () => (
    <footer style={footerStyle}>
        <BrandIcon />
        <Others />
    </footer>
);

export default Footer;
