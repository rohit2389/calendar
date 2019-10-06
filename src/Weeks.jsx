import React from 'react'
import Week from './Week'

export default function renderWeeks(props) {
    let weeks = [];
    let done = false;
    let date = props.month.clone().startOf("month").add("w" - 1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    const {
        selected,
        month,
        select
    } = props;

    while (!done) {
        weeks.push(
            <Week key={date}
                date={date.clone()}
                month={month}
                select={(day) => select(day)}
                selected={selected} />
        );

        date.add(1, "w");

        done = count++ > 2 && monthIndex !== date.month();
        monthIndex = date.month();
    }

    return weeks;
};