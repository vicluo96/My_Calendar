# Build a calendar component using ReactJS
# My Calendar
<div align="center">
<img src="https://i.imgur.com/rPPfycf.png"/>
</div>

### Installation

After downloading all the files on the drive, use
```
npm install
``` 
to download all the dependencies in `package.json.`

Use 
```
npm start
``` 
command to use this calendar in `localhost:3000`


### Properties


<table>
  <tr>
   <td>Name
   </td>
   <td>Type
   </td>
   <td>Default
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>Calendar
   </td>
   <td>function()
   </td>
   <td>
   </td>
   <td>export function of ./calendar/index.jsx
   </td>
  </tr>
  <tr>
   <td>date
   </td>
   <td>object
   </td>
   <td>current date
   </td>
   <td>Today’s date
   </td>
  </tr>
  <tr>
   <td>day
   </td>
   <td>number or string, 
<p>
element of date object
   </td>
   <td>current day
   </td>
   <td>day of the date
   </td>
  </tr>
  <tr>
   <td>week
   </td>
   <td>number or string, 
<p>
element of date object
   </td>
   <td>current week
   </td>
   <td>week of the date
   </td>
  </tr>
  <tr>
   <td>month
   </td>
   <td>number or string, 
<p>
element of date object
   </td>
   <td>current month
   </td>
   <td>month of the date
   </td>
  </tr>
  <tr>
   <td>year
   </td>
   <td>number or string, 
<p>
element of date object
   </td>
   <td>current year
   </td>
   <td>year of the date
   </td>
  </tr>
  <tr>
   <td>value
   </td>
   <td>object
   </td>
   <td>date
   </td>
   <td>current date of the calendar
   </td>
  </tr>
  <tr>
   <td>setValue
   </td>
   <td>function(value)
   </td>
   <td>
   </td>
   <td>setter function of thevalue
   </td>
  </tr>
  <tr>
   <td>calendar
   </td>
   <td>array
   </td>
   <td>null
   </td>
   <td>the array contains days diaplayed on the calendar
   </td>
  </tr>
  <tr>
   <td>setCalendar
   </td>
   <td>function(array)
   </td>
   <td>
   </td>
   <td>setter of the calendar
   </td>
  </tr>
  <tr>
   <td>buildCalendar
   </td>
   <td>function(value)
   </td>
   <td>
   </td>
   <td>return an array of day of the calendar, export function of build.js
   </td>
  </tr>
  <tr>
   <td>startDay
   </td>
   <td>number or string
   </td>
   <td>first weekday of current month
   </td>
   <td>the start day of the calendar 
   </td>
  </tr>
  <tr>
   <td>endDay
   </td>
   <td>number or string
   </td>
   <td>the last weekday of  the next week of current month
   </td>
   <td>the end day of the calendar 
   </td>
  </tr>
  <tr>
   <td>CalendarHeader
   </td>
   <td>function(value, setValue)
   </td>
   <td>
   </td>
   <td>export function of header.jsx, return the header’s element
   </td>
  </tr>
  <tr>
   <td>currMonthName
   </td>
   <td>function()
   </td>
   <td>
   </td>
   <td>return string format of the month value
   </td>
  </tr>
  <tr>
   <td>currYear
   </td>
   <td>function()
   </td>
   <td>
   </td>
   <td>return string format of the year value
   </td>
  </tr>
  <tr>
   <td>prevMonth
   </td>
   <td>function()
   </td>
   <td>
   </td>
   <td>return date of the previous month
   </td>
  </tr>
  <tr>
   <td>nextMonth
   </td>
   <td>function()
   </td>
   <td>
   </td>
   <td>return date of the next month
   </td>
  </tr>
  <tr>
   <td>firstDay
   </td>
   <td>number or string
   </td>
   <td>The first day of current month
   </td>
   <td>The days before this are marked grey in the calendar
   </td>
  </tr>
  <tr>
   <td>lastDay
   </td>
   <td>number or string
   </td>
   <td>The last day of current month
   </td>
   <td>The days after this day are marked grey in the calendar
   </td>
  </tr>
  <tr>
   <td>dayStyles
   </td>
   <td>function(day, value)
   </td>
   <td>
   </td>
   <td>export function of style.js,the string of the classname: eg: “notThisMonth” or “” to corresponding css class for styling the day color 
   </td>
  </tr>
  <tr>
   <td>isSelected
   </td>
   <td>function(day, value)
   </td>
   <td>
   </td>
   <td>called when checking the day is selected, 
   </td>
  </tr>
  <tr>
   <td>notThisMonth
   </td>
   <td>function(day, value)
   </td>
   <td>
   </td>
   <td>called when checking the day is in current month
   </td>
  </tr>
  <tr>
   <td>isToday
   </td>
   <td>function(day)
   </td>
   <td>
   </td>
   <td>called when checking the day is today
   </td>
  </tr>
</table>


### Build with
* [React.js](https://zh-hant.reactjs.org/) - The web framework used
* [Moment.js](https://momentjs.com/) - The JavaScript library used to get current time
* [Firebase](https://shorturl.at/qxDHT)- Deploy and host the demo web page

### Demo page
* [MyCalendar](https://my-calendar-demo-691a6.web.app/) 

### Note
#### Fuctions
* Day selecting
* Previous or next month selecting by clicking left or right arrow sign


#### Browser Support
* Google Chrome
* Firefox
* Safari
* Edge
* Internet Explorer 11*

*footnote: Some CSS styling properties, like fonts and colors, may not be supported by IE 11. For exmaple, daystyle grey fonts, will be replaced by the black ones.   




