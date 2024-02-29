function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(new Date(2000, 2, 1))); // true
