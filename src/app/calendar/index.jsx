import React, { useState, useEffect } from "react";
import moment from "moment"
import "./styles.css";
import buildCalendar from "./build";
import dayStyles from "./style";

export default function Calendar() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

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
        <div className="calendar">
            <div className="header">
                <div className="previous"
                    onClick={() => setValue(prevMonth())}
                >{String.fromCharCode(139)}</div>
                <div>{currMonthName()} {currYear()}</div>
                <div className="next"
                    onClick={() => setValue(nextMonth())}
                >{String.fromCharCode(155)}</div>

            </div>
            <div className="body">
                {calendar.map((week) => (
                    <div>
                        {week.map((day) => (
                            <div className="day" onClick={() => setValue(day)}>
                                <div className={dayStyles(day, value)}>
                                    {day.format("D")}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}