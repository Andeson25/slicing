import React, {Component} from 'react';
import './SideBar.css'

export default class SideBar extends Component {

    render() {
        const logo = require('../..//logo.svg');
        return (
            <div className="sideBar">
                <img src={String(logo)} alt="logo"/>
                <h3>ASX APPS</h3>
                <nav>
                    <a className={"active"} href="">Equities</a>
                    <a  href="">Fix income</a>
                </nav>
                <p>3rd party apps</p>
                <h2>Right issues</h2>
            </div>
        );
    }

}