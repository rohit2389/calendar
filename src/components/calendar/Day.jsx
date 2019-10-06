 
  import React from 'react'
  export default function Day(props) {

      const {
        day,
        day: {
          date,
          isCurrentMonth,
          isToday,
          number
        },
        select,
        selected
      } = props;
  
      return (
        <span 
          key={date.toString()} 
          className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
          onClick={()=>select(day)}>{number}</span>
      );
  }