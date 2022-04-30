function isSelected(day, value){
    return value.isSame(day, "day");
}

function notThisMonth(day, value){
    const firstDay = value.clone().startOf("month");
    const lastDay = value.clone().endOf("month");
    return day.isBefore(firstDay, "day") || day.isAfter(lastDay, "day"); 
}
/* || day.isAfter(lastDay, "day")*/

function isToday(day){
    return day.isSame(new Date(), "day");
}

export default function dayStyles(day, value){
    if (notThisMonth(day, value)) return "notThisMonth"
    if (isSelected(day, value)) return "selected"
    if (isToday(day)) return "today"
    return ""
}