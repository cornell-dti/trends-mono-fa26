// add location, instructors, and sechedule (day, start_time, end_time)

const trends = {
  code: "INFO 1998",
  location: "Phillips 203",
  instructors: ["Esha", "Temi", "Hannah"],
  schedule: {
    day: "Mondays",
    start_time: "7:00 Pm",
    end_time: "9:00 Pm",
  },
  "ugly key": "ugly value",
  get class_representation() {
    return `${this.location} (${this.schedule.day}) ${this.schedule.start_time} - ${this.schedule.end_time}`;
  },
};

console.log(trends);
console.log(trends.code);
console.log(trends["code"]);
console.log(trends["ugly key"]);

console.log(trends.class_representation);
trends.code = "INFO1999";

console.log(trends.code);
// trends = {}; // eslint is warning!

let x = 7;
console.log(x);

x = 8;
console.log(x);
