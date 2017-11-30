import React from 'react';
import { Route, Link } from 'react-router-dom'

var data = [
    // { id: "1", name: "Dashboard", url: "/Dashboard", subMenu: [] },
    {
        id: "2", name: "Reoprts", path: "/", subMenu: [
            { id: "3", name: "Score Reoprt", path: "/scorereport" },
            { id: "4", name: "Usage Reoprt", path: "/usagereport" },
            { id: "5", name: "Skill Breakdown", path: "/skillbreakdown" }
        ]
    },
    {
        id: "1", name: "Roles & Users", path: "/rolesandusers", subMenu: [
            { id: "6", name: "User Groups", path: "/usergroups" },
            { id: "7", name: "Import Students", path: "/importstudents" },
        ]
    },
];

var menuStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '12.6px',
    textAlign: 'left',
    color: '#213a62',
    margin: '0 0 0 15px'
}
var subMeunStyle = {
    fontFamily: 'Gotham',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#5d90e3'
}

class SideMenu extends React.Component {
    render() {
        var menuNodes = this.props.data.map(function (menu) {
            var subMenuNodes = menu.subMenu.map(function (subMenu) {
                return <li key={subMenu.id}><Link to={subMenu.path} style={subMeunStyle}>{subMenu.name}</Link></li>;
            });
            var menuNode;
            if (menu.subMenu.length > 0) {
                menuNode = (
                    <li className="panel panel-default" id="dropdown" key={menu.id}>
                        <a data-toggle="collapse" aria-expanded="true" style={menuStyle}><span className=""></span> {menu.name}</a>
                        <div id={'dropdown-' + menu.id} className="panel-collapse collapse in" aria-expanded="true">
                            <div className="panel-body">
                                <ul className="nav navbar-nav">
                                    {subMenuNodes}
                                </ul>
                            </div>
                        </div>
                    </li>
                );
            }
            else {
                menuNode = <li key={menu.id}><a href={menu.path}><span className=""></span> {menu.name}</a></li>;
            }
            return (menuNode);
        });
        return (
            <ul className="nav navbar-nav">{menuNodes}</ul>
        );
    }
}

const NavBar = () => (
    <nav className="navbar navbar-default" role="navigation">
        <div className="side-menu-container">
            <ul className="nav navbar-nav">
                <SideMenu data={data} />
            </ul>
        </div>
    </nav>
);

export default NavBar;