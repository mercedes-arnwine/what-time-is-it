var time = new Date().getHours();
var greeting = "Hello";
var name = "Mercedes";
//console.log(time);

if (time < 12) {
  greeting = "Good Morning";
} else if (time <= 18) {
  greeting = "Good Afternoon";
} else if (time <= 22) {
  greeting = "Good Evening";
} else {
  greeting = "Why are you still up? Go to bed :)";
}

alert(`${greeting}, ${name}!`);
