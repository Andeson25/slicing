import React, {Component} from 'react';
import './TableRow.css'

export default class TableRow extends Component {

    render() {
        const isActive = this.props.active;
        return (
            <div className={"TableRow " + (isActive ? 'active' : '')}  >
                <h2>ASX Clear</h2>
                <h2>Arganaut</h2>
                <h2>Customer 1</h2>
                <h2>Buy</h2>
                <h2>$9,43</h2>
                <h2>$7200</h2>
                <h2>26/06/16</h2>
                <h2>26/06/16</h2>
            </div>
        );
    }

}