
import React from 'react'
const dayNames= ["Su", "Mo", "Te", "We", "Th", "Fr", "Sa"]
function DayNames() {
    
    return (
        <div className="row day-names">
            { dayNames.map( (day, index) => 
                <span className="day" key={index}> { day } </span>
            )}
        </div>
    );
}
export default React.memo(DayNames);
