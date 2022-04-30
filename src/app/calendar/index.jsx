import React, { useState, useEffect } from "react";
import moment from "moment"
import "./styles.css";
import buildCalendar from "./build";
import dayStyles from "./style";
import CalendarHeader from "./header";

export default function Calendar() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value])



    return (
        <div className="calendar">
            <CalendarHeader value={value} setValue={setValue}/>
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