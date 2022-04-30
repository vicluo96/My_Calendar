import React from "react";

export default function CalendarHeader({ value, setValue }) {

    function currMonthName() {
        return value.format("MMMM");
    }

    function currYear(){
        return value.format("YYYY");
    }
    
    function prevMonth(){
        return value.clone().subtract(1, "month");
    }

    function nextMonth(){
        return value.clone().add(1, "month");
    }
    
    return (
        <div className="header">
            <div className="previous"
                onClick={() => setValue(prevMonth())}
            >{String.fromCharCode(139)}</div>
            <div>{currMonthName()} {currYear()}</div>
            <div className="next"
                onClick={() => setValue(nextMonth())}
            >{String.fromCharCode(155)}</div>

        </div>
    )

}