import React from 'react';
import DatePicker from '../DatePicker';
import Range from '../RCSlider'

var exportStyle = {
    margin: '-5px 0px 0px 20px',
    backgroundColor: '#213a62',
    fontWeight: 'bold',
    fontFamily: 'GothamNarrow',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1.31',
    textAlign: 'left'
}

var titleBlockStyle = {
    margin: '50px 0 0 0'
}

var titleStyle = {
    fontFamily: 'GothamNarrow',
    fontSize: '26.3px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textAlign: 'left',
    color: '#213a62'
}

var filterBlockStyle = {
    margin: '20px 0 0 0',
    fontFamily: 'GothamNarrow',
    fontWeight: 'bold',
    color: '#213a62'
}

var filterByStyle = {
    margin: '0 10px 0 0'
}

var dropdownMenuStyle = {
    display: 'inline-block',
    margin: '0 10px',
}

var dropdownBottonStyle = {
    backgroundColor: '#fff',
    margin: '0 10px',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
}

var caretStyle = {
    margin: '0 0 0 20px'
}

var chartRowStyle = {
    padding: '0 15px 0'
}

var chartBlockStyle = {
    backgroundColor: '#fff',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    margin: '30px 0 0 0'
}

var countBlockStyle = {
    backgroundColor: '#fff',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    margin: '30px 0 0 0',
    // width: '225px',
    height: '170px',
    textAlign: 'center',
    fontFamily: 'GothamNarrow',
    fontWeight: 'bold'
}

var countTitleStyle = {
    fontSize: '21px',
    color: '#213a62',
    margin: '10px 0 0 0',
}

var countNumberStyle = {
    fontSize: '73.5px',
    color: '#5d90e3',
    margin: '-10px 0',
}

var dataTableRowStyle = {
    padding: '0 30px 0 15px'
}

var dataTableBlockStyle = {
    backgroundColor: '#fff',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    margin: '30px 0',
}
var tableStyle = {
    display: 'table',
    padding: '10px',
    fontSize: '12.6px',
    lineHeight: '2.38',
    textAlign: 'left',
    color: '#192230',
    marginBottom: '0px'
}
var rowStyle = {
    display: 'table-row',
}
var tdStyle = {
    display: 'table-cell',
    padding: '5px 0'
}
var thStyle = {
    display: 'table-cell',
    padding: '5px 0',
    // fontWeight :'bold'
}
var thNameStyle = {
    display: 'table-cell',
    fontWeight: 'bold'
}
var dropDown = {
    right: '0',
    left: 'auto'
}

var dropdownLiStyle = {
    fontWeight: 'normal',
    padding: '3px 20px',
    whiteSpace: 'nowrap'
}

var scoreDatas = [
    { "id": "1", "name": "Palo Alto Unified School District", "compositeScore": "30(+20%)", "mathScore": "30(+20%)", "scienceScore": "30(+20%)", "readingScore1": "30(+20%)", "readingScore2": "30(+20%)" },
    { "id": "2", "name": "Vallejo Unified School District", "compositeScore": "28(-15%)", "mathScore": "28(-15%)", "scienceScore": "28(-15%)", "readingScore1": "28(-15%)", "readingScore2": "28(-15%)" },
    { "id": "3", "name": "Mountain View School District", "compositeScore": "28(+30%)", "mathScore": "28(+30%)", "scienceScore": "28(+30%)", "readingScore1": "28(+30%)", "readingScore2": "28(+30%)" }
];

const Export = () => (
    <span>
        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" style={exportStyle}>Export <span className="caret"></span></button>
        <ul className="dropdown-menu" role="menu">
            <li key="1"><a href="#">PDF</a></li>
            <li key="2"><a href="#">XLS</a></li>
            <li key="3"><a href="#">CSV</a></li>
        </ul>
    </span>
)

class DropdownMenu extends React.Component {
    render() {
        return (
            <div className="dropdown" style={dropdownMenuStyle}>
                <button className="btn dropdown-toggle" type="button" id="" data-toggle="dropdown" style={dropdownBottonStyle} >
                    Dropdown
                    <span className="caret" style={caretStyle}></span>
                </button>
                <ul className="dropdown-menu" role="menu" aria-labelledby="">
                    <li role="presentation"><a role="menuitem" href="#">Action</a></li>
                    <li role="presentation"><a role="menuitem" href="#">Another action</a></li>
                    <li role="presentation"><a role="menuitem" href="#">Something else here</a></li>
                    <li role="presentation" className="divider"></li>
                    <li role="presentation"><a role="menuitem" href="#">Separated link</a></li>
                </ul>
            </div>
        );
    }
}

class DistrictScore extends React.Component {
    render() {
        return (

            <div className="row" style={rowStyle}>
                <div className="td" style={tdStyle}>{this.props.scoreData.name}</div>
                <div className="td" style={tdStyle}>{this.props.scoreData.compositeScore}</div>
                <div className="td" style={tdStyle}>{this.props.scoreData.mathScore}</div>
                <div className="td" style={tdStyle}>{this.props.scoreData.scienceScore}</div>
                <div className="td" style={tdStyle}>{this.props.scoreData.readingScore1}</div>
                <div className="td" style={tdStyle}>{this.props.scoreData.readingScore2}</div>
                <div className="td" style={tdStyle}></div>
            </div>

        );
    }
}

class DistrictDropdown extends React.Component {
    componentDidMount() {
        $(".dropdown-menu").click(function (e) {
            e.stopPropagation();
        });
    }
    render() {
        return (
            <ul className="dropdown-menu" role="menu" aria-labelledby="" style={dropdownLiStyle}>
                <li><input type="checkbox" className="switch" id="a" /> <label htmlFor="a"><span className="sw"></span></label> Sort by this column <i className="fa fa-long-arrow-down" aria-hidden="true"></i></li>
                <li><input type="checkbox" className="switch" id="b" /> <label htmlFor="b"><span className="sw"></span></label> Sort by this column <i className="fa fa-long-arrow-up" aria-hidden="true"></i></li>
                <li><input type="checkbox" /> ALL DISTRICTS</li>
                <li><input type="checkbox" /> Palo Alto Unified School</li>
                <li><input type="checkbox" /> Vallejo Unified School</li>
                <li><input type="checkbox" /> Mountain View School</li>
            </ul>
        );
    }
}

class TbDropdown extends React.Component {
    componentDidMount() {
        $(".dropdown-menu").click(function (e) {
            e.stopPropagation();
        });
    }
    render() {
        return (
            <div className="td btn-group" style={thStyle}>
                <div className="dropdown-toggle" data-toggle="dropdown">
                    this.props.title <span className="caret" style={caretStyle}></span>
                </div>
                <ul className="dropdown-menu" role="menu" aria-labelledby="" style={dropdownLiStyle}>
                    <li><input type="checkbox" className="switch" id={'c' + this.props.id} /> <label htmlFor={'c' + this.props.id}><span className="sw"></span></label> Show column</li>
                    <li><input type="checkbox" className="switch" id={'d' + this.props.id} /> <label htmlFor={'d' + this.props.id}><span className="sw"></span></label> Sort by this column <i className="fa fa-long-arrow-down" aria-hidden="true"></i></li>
                    <li><input type="checkbox" className="switch" id={'e' + this.props.id} /> <label htmlFor={'e' + this.props.id}><span className="sw"></span></label> Sort by this column <i className="fa fa-long-arrow-up" aria-hidden="true"></i></li>
                    <li className="divider"></li>
                    <li>Last reading score</li>
                    <li>
                        <Range />
                    </li>
                </ul>
            </div>
        );
    }
}

class SettingDropdown extends React.Component {
    componentDidMount() {
        $(".dropdown-menu").click(function (e) {
            e.stopPropagation();
        });
    }
    render() {
        return (
            <ul className="dropdown-menu" role="menu" style={dropDown}>
                <li><input type="checkbox" /> E-class taken</li>
                <li><input type="checkbox" /> Practice questions completed</li>
                <li><input type="checkbox" /> % Correct</li>
                <li><input type="checkbox" /> Study materials read</li>
                <li><input type="checkbox" /> Total time spent on platform</li>
            </ul>

        );
    }
}

const UsageReoprt = () => (
    <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="row" style={titleBlockStyle}>
            <div className="col-xs-12 col-sm-12 col-md-12">
                <span style={titleStyle}>Usage Report: Alto Unified School District</span>
                <Export />
            </div>
        </div>
        <div className="row" style={filterBlockStyle}>
            <div className="col-xs-12 col-sm-12 col-md-5">
                <DatePicker />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7">
                <span style={filterByStyle}>Filter by:</span>
                <DropdownMenu />
                <DropdownMenu />
                <DropdownMenu />
            </div>
        </div>
        <div className="row" style={chartRowStyle}>
            <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div style={countBlockStyle}>
                        <div style={countTitleStyle}>Average Study Plan Progress</div>
                        <div style={countNumberStyle}>57%</div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div style={countBlockStyle}>
                        <div style={countTitleStyle}>Total Question Answered</div>
                        <div style={countNumberStyle}>210</div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div style={countBlockStyle}>
                        <div style={countTitleStyle}>Total Time on Platform</div>
                        <div style={countNumberStyle}>2h3m</div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div style={countBlockStyle}>
                        <div style={countTitleStyle}>Student Count</div>
                        <div style={countNumberStyle}>28</div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div style={countBlockStyle}>
                        <div style={countTitleStyle}>Last Active Date</div>
                        <div style={countNumberStyle}>8/15/17</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row" style={dataTableRowStyle}>
            <div className="col-xs-12 col-sm-12 col-md-12" style={dataTableBlockStyle}>
                <div className="table" style={tableStyle}>
                    <div className="row" style={rowStyle}>
                        <div className="td btn-group" style={thNameStyle}>
                            <div className="dropdown-toggle" data-toggle="dropdown">
                                District name <span className="caret" style={caretStyle}></span>
                            </div>
                            <DistrictDropdown />
                        </div>
                        <TbDropdown title={'Last Composite Score'} id={1} />
                        <TbDropdown title={'Last Math Score'} id={2} />
                        <TbDropdown title={'Lase Science Score'} id={3} />
                        <TbDropdown title={'Last Reading Score'} id={4} />
                        <TbDropdown title={'Last Reading Score'} id={5} />
                        <div className="td btn-group" style={thStyle}>
                            <i className="fa fa-cog fa-lg dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                            <SettingDropdown />
                        </div>
                    </div>
                    {
                        scoreDatas.map(function (scoreData) {
                            return (
                                <DistrictScore scoreData={scoreData} key={scoreData.id} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
);

export default UsageReoprt;
