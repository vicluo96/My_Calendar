import React from "react";
import moment from "moment"

export default function Calendar() {
    const value = moment()
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week").add(7, 'days');
    const day = startDay.clone().subtract(1, "day");
    const calendar = []
    return (
        <div>
            {startDay.format("MM/DD")} - {endDay.format("MM/DD")}
        </div>
        );
}