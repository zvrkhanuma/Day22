// src/Table.js
import React, { Component } from  'react';

const TableHeader = () => {
        return (
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                    </tr>
                </thead>
        )
    }

    class Table extends Component {
        render() {
            const {characterData} = this.props;
            return (
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} />
                </table>
            )
        }
    }

    const TableBody = (props) => {
        const rows = props.characterData.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                </tr>
            );
        });
    };
export default Table;