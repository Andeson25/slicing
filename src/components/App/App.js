import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Top from "../Top/Top";
import SideBar from "../SideBar/SideBar";
import TableWrapper from "../Table/TableWrapper";


class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="wrapper">
                    <Top/>
                    <SideBar/>
                    <TableWrapper/>
                </div>
            </div>
        );
    }
}

export default App;
