export function getCurrentDate(type) {
  let days;
  let months;
  if (type == "large") {
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  } else if (type == "short") {
    days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
  }
  Date.prototype.getMonthName = function () {
    return months[this.getMonth()];
  };
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };

  let now = new Date();
  let date1 = now.getDate();
  let day = now.getDayName();
  let month = now.getMonthName();
  return `${day} ${date1} ${month}`;
}

export function getTomorrowsDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
}

export function getNextWeekDate() {
  let currentDate = new Date();
  let nextWeekDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  return nextWeekDate.toISOString().split("T")[0];
}
