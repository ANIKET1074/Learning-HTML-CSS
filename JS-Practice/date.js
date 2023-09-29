const dt = new Date("2023-09-29");
const dt1 = new Date("2023-09-29T12:00:00Z");

// differnt ways to write the date
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// Date Get methods

const dt3 = new Date();
console.log(dt3.getFullYear());
console.log(dt3.getDate());
console.log(dt3.getDay());
console.log(dt3.getHours());
console.log(dt3.getMilliseconds());
console.log(dt3.getMonth());

// getFullYear();
// getMonth();
// getDate();
// getDay();
// getHours();
// getMinutes();
// getSeconds();
// getMilliseconds();
// getTime();

// Setting methods of date

const dt4 = new Date();
console.log(dt4.setFullYear(2023));
console.log(dt4.setMonth(10));
console.log(dt4.setHours(13));
