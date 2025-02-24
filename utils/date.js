function getDayOfTheWeek(utcDate) {

  const date = new Date(utcDate * 1000);

  const dayIndex = date.getDay();
  console.log(dayIndex);
  let day;

  switch (dayIndex) {
    case 0:
      dayName = "Duminică";
      break;
    case 1:
      dayName = "Luni";
      break;
    case 2:
      dayName = "Marți";
      break;
    case 3:
      dayName = "Miercuri";
      break;
    case 4:
      dayName = "Joi";
      break;
    case 5:
      dayName = "Vineri";
      break;
    case 6:
      dayName = "Sâmbătă";
      break;
    default:

      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }


  return dayName;
}

function getHour(utcDate) {

  const date = new Date(utcDate * 1000);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}