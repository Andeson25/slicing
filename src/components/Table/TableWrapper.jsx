import React, {Component} from 'react';
import './TabelWrapper.css'
import TableRow from "./TableRow/TableRow";

export default class TableWrapper extends Component {

    render() {
        return (
            <div className="TableWrapper">
                <header className="TableHeader" >
                    <h2>Counter party</h2>
                    <h2>Trading Participant</h2>
                    <h2>Client</h2>
                    <h2>Buy/Sell</h2>
                    <h2>Trade Price</h2>
                    <h2>Value</h2>
                    <h2>Trade Date</h2>
                    <h2>Settlement date</h2>
                </header>
                <div className="hr"></div>
                <div className="list-wrapper">
                    <TableRow active={true}/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
                </div>
            </div>
        );
    }

}