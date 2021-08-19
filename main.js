//  Clock JS:

class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();

    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, "0");
    const secondFormatted = parts.second.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondFormatted}`;
    const amPm = parts.isAM ? "AM" : "PM";

    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-ampm").textContent = amPm;
  }
  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      second: now.getSeconds(),
      isAM: now.getHours() < 12
    };
  }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();

//  Calender JS:

class CalenderDate {
  constructor(element) {
    this.element = element;
  }
  startFunction() {
    this.dateUpdate();

    setInterval(() => {
      this.dateUpdate();
    }, 500);
  }
  dateUpdate() {
    const parts = this.getDateParts();
    const dateFormatted = parts.date.toString().padStart(2, "0");
    const monthFormatted = parts.month.toString().padStart(2, "0");
    let dt;
    switch (parts.day) {
      case 0:
        dt = "Sun";
        break;
      case 1:
        dt = "Mon";
        break;
      case 2:
        dt = "Tue";
        break;
      case 3:
        dt = "Wed";
        break;
      case 4:
        dt = "Thu";
        break;
      case 5:
        dt = "Fri";
        break;
      case 6:
        dt = "Sat";
        break;
      default:
        dt = "Error Figuring The Day";
        break;
    }

    const weekDay = `${dt}, `;
    const calenderFormatted = `${dateFormatted}/${monthFormatted}/${parts.year}`;

    this.element.querySelector(".day").textContent = weekDay;
    this.element.querySelector(".ddmmyyyy").textContent = calenderFormatted;
  }
  getDateParts() {
    const today = new Date();
    return {
      day: today.getDay(),
      date: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear()
    };
  }
}

const dateElement = document.querySelector(".clock");
const dateObject = new CalenderDate(dateElement);

dateObject.startFunction();
