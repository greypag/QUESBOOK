import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import ScoreReoprt from './components/ScoreReoprt';
import UsageReoprt from './components/UsageReoprt';
import SkillBreakdown from './components/SkillBreakdown';
import UserGroups from './components/UserGroups';
import ImportStudents from './components/ImportStudents';
import Footer from './components/Footer';
import '../res/style/main.css';


$(function () {
    $('.navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('#search').removeClass('in').addClass('collapse').slideUp(200);
    });

    $('#search-trigger').click(function () {
        $('.navbar-nav').removeClass('slide-in');
    });
});

const MyRoute = () => (
    <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/scorereport" component={ScoreReoprt} />
        <Route path="/usagereport" component={UsageReoprt} />
        <Route path="/skillbreakdown" component={SkillBreakdown} />
        <Route path="/usergroups" component={UserGroups} />
        <Route path="/importstudents" component={ImportStudents} />
    </div>
);

const MyPage = () => (
    <div>
        <Header />
        <BrowserRouter>
            <div className="row">
                <div id="side-menu" className="side-menu">
                    <SideMenu />
                </div>
                <div className="container-fluid">
                    <div className="side-body">
                        <MyRoute />
                    </div>
                </div>
            </div>
        </BrowserRouter>
        <Footer />
    </div>
);

ReactDOM.render(<MyPage />, document.getElementById('wrapper'));
