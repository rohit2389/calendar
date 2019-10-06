import React from 'react'
const renderDateLabel = (month) => {
    return <h1 className="date">{month.format('DD')}</h1>
}

const renderMonthLabel = (month) => {
    return <div className="month">{month.format('MMM')}</div>
}

const renderDayLabel = (month) => {
    return <div className="day-display">{month.format("dddd")}</div>;
}

const renderYearLabel = (month) => {
    return <div className="year">{month.format("YYYY")}</div>;
}
function SelectedDay(props) {
    const {
        month
    } = props;

    return (
        <React.Fragment>
            { renderDayLabel(month) }
            { renderDateLabel(month) }
            { renderMonthLabel(month) }
            { renderYearLabel(month) }
        </React.Fragment>
    )
}

export default React.memo(SelectedDay);