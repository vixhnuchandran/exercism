//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const meetup = (year, month, nth, day) => {
  const numberOfDaysInMonth = new Date(year, month, 0).getDate();

  let meetupDays = [];
  [...Array(numberOfDaysInMonth).keys()].forEach((dayIndex) => {
    if (
      new Date(year, month - 1, dayIndex + 1).getDay() === weekdays.indexOf(day)
    ) {
      meetupDays.push(dayIndex + 1);
    }
  });
  const nthToIndexMap = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    last: meetupDays.length - 1,
  };
  const teenthDay = meetupDays.find((date) => date > 12);
  const resultingDay = meetupDays[nthToIndexMap[nth]] || teenthDay;
  return new Date(year, month - 1, resultingDay);
};
