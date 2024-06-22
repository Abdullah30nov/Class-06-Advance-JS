// const API_KEY = "**********************************************";
// const input = document.getElementById("search");
// const showdata = document.getElementById("showdata");

// const searchWeather = async ()=>{
//     const API = `https://api.openweathermap.org/data/2.5/weather?q=&{input.value}&appid=&{API_KEY}&units=metric`;
//     showdata.innerHTML = `<div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>`;

// const response = await fetch(API);
//     const data = await response.json();
//     console.log(data);
//     showWeatherData(data);
// }

// const showWeatherData = (data)=>{
//     showdata.innerHTML = `<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`
// }



//=========================================Classes
// function Student (name,age,edu){
//         name = name;
//         age = age;
//         edu = edu;
// }
// const std = new Student("Abdullah",12,"Matric");
// console.log(std);

// class Student {
//     constructor(id, name, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// const std = new Student(1234, "Abdullah", "@gmail.com", "065746656");
// console.log(std);


// class School extends Student{
//     constructor(institute,id, name, email, phone){
//         super(id, name, email, phone);
//         this.institute = institute;
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// const student1 = new School("JAWAN PAKISTAN",1234,"Abdullah","@gmail.com","033222424")
// console.log(student1);