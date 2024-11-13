let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const updateSlide = (newIndex) => {
  slides[currentSlide].classList.remove("show");
  currentSlide = (newIndex + slides.length) % slides.length;
  slides[currentSlide].classList.add("show");
};

nextBtn.addEventListener("click", () => {
  updateSlide(currentSlide + 1);
});

prevBtn.addEventListener("click", () => {
  updateSlide(currentSlide - 1);
});

// function student1(name, age) {
//   this.sname = name;
//   this.sage = age;
// }
// let s = new student1("Abc", 25);
// console.log(s);

// function student1(name, age) {
//   sname = name;
//   sage = age;
// }
// let s = new student1("Abc", 25);
// console.log(s);

// var student1 = function (name, age) {
//   this.sname = name;
//   this.sage = age;
// };
// var s = new student1("Abc", 25);
// console.log(s);

// let student1 = (name, age) => {
//   this.sname = name;
//   this.sage = age;
// }
// let s = new student1("Abc", 25);
// console.log(s);

// function student1(name, age) {
//   this.sname = name;
//   this.sage = age;
// }
// let s = student1("Abc", 25);
// console.log(s); 

//UNNDEFINED

// function student1(name = "Default", age = 18) {
//   this.sname = name;
//   this.sage = age;
// }
// let s = new student1();
// console.log(s);


