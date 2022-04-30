import React, { useState, useEffect } from "react";
import moment from "moment"
import "./styles.css";
import buildCalendar from "./build";

export default function Calendar() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    const firstDay = value.clone().startOf("month");
    const lastDay = value.clone().endOf("month");

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])

    function isSelected(day){
        return value.isSame(day, "day");
    }

    function notThisMonth(day){
       return day.isBefore(firstDay, "day") || day.isAfter(lastDay, "day"); 
    }
    /* || day.isAfter(lastDay, "day")*/

    function isToday(day){
        return day.isSame(new Date(), "day");
    }

    function dayStyles(day){
        if (notThisMonth(day)) return "notThisMonth"
        if (isSelected(day)) return "selected"
        if (isToday(day)) return "today"
        return ""

    }

    return (
        <div className="calendar">
            {calendar.map((week) => (
                <div>
                    {week.map((day) => (
                        <div className="day" onClick = {() => setValue(day)}>
                            <div className={dayStyles(day)}>
                                {day.format("D")}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}