import React from 'react';
import DayNames from './DayNames';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
export default function CalendarHeader(props) {
    const { 
        month,
        previous,
        next
    } = props;
    return (
        <header className="header">
            <div className="month-display row">
                <i className="arrow" onClick={ previous } > <FaAngleLeft /> </i>
                <span className="month-label">{ month.format("MMMM YYYY") }</span>
                <i className="arrow" onClick={ next } > <FaAngleRight /> </i>
            </div>
            <DayNames />
        </header>
    );
}