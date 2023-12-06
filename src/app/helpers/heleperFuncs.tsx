export function getCurrentDate(type:string) {
  let now = new Date();
  let date1 = now.getDate();
  let day:string;
  let month:string;
  if(type=="short"){
    day = now.toLocaleString('en-US', { weekday: 'short' });
    month = now.toLocaleString('en-US', { month: 'short' });
  }
  else{
    day = now.toLocaleString('en-US', { weekday: 'long' });
    month = now.toLocaleString('en-US', { month: 'long' });
  }

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
