//  let cityInput = document.getElementById("city");
//  let btn = document.getElementById("btn");
//  let resultDiv = document.getElementById("result");

// btn.addEventListener("click", function() {
//     getWeather();

// });
// async function getWeather() {
// const city = document.getElementById("city").value    
// const apikey=`c6f73615c63831181ca7905501c85a8d`
// const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

// try {   
//     const response = await fetch(url)
// const data=await response.json()
// console.log(data)
// const temp=data.main.temp
// // // const description=data.weather[0].description;
// // // const humidity=data.main.humidity;
// //const windSpeed=data.wind.speed;
//  const weather=data.weather[0].description
//  document.getElementById("result").innerHTML=`<h2>Temperature in ${city}: ${temp}°C Weather: ${weather}</h2>`
// const result = document.getElementById("result")
// result.style.color="blue"
// result.style.fontSize="20px"
// result.style.fontFamily="Arial, sans-serif"
// result.style.backgroundColor="#a8aa9b"
// result.style.padding="5px"
// result.style.marginTop="10px"
// result.style.borderRadius="5px"
// result.style.textAlign="center"
// result.style.boxShadow="0 4px 8px rgba(202, 165, 18, 0.2)"
// result.style.transition="all 0.3s ease"
// result.addEventListener("mouseover", function() {
//     result.style.transform="scale(1.1)"
//     result.style.boxShadow="0 8px 16px rgba(202, 165, 18, 0.3)"     
// })
// result.addEventListener("mouseout", function() {
//     result.style.transform="scale(1)"
//     result.style.boxShadow="0 4px 8px rgba(202, 165, 18, 0.2)"     
// })

// }catch(error){
//     console.log("error", error)
// }   
// }   


const API_KEY ='c6f73615c63831181ca7905501c85a8d'; // OpenWeather key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherCard = document.getElementById('weatherCard');
const errorMsg = document.getElementById('errorMsg');

searchBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') getWeather(); // Enter adicha search aagum
});

async function getWeather() {
  const city = cityInput.value.trim();

  if(city === "") {
    showError("City name poduda machi");
    return;
  }

  // Loading state
  searchBtn.disabled = true;
  searchBtn.textContent = "Loading...";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if(response.ok) {
      updateWeather(data);
    } else {
      showError(data.message); // "city not found" nu varum
    }
  } catch(error) {
    showError("Internet issue da. Check panu");
  }

  searchBtn.disabled = false;
  searchBtn.textContent = "Search";
}

function updateWeather(data) {
  document.getElementById('cityName').textContent = data.name;
document.getElementById('temp').textContent = Math.round(data.main.temp) + "°C";
  document.getElementById('desc').textContent = data.weather[0].description;
  document.getElementById('humidity').textContent = data.main.humidity + "%";
  document.getElementById('wind').textContent = data.wind.speed + " m/s";
  const iconCode = data.weather[0].icon;
document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherCard.classList.remove('d-none');
  errorMsg.classList.add('d-none');
}

function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.classList.remove('d-none');
  weatherCard.classList.add('d-none');
}

// //https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}

// // let input = document.getElementById("input");
// // let result = document.getElementById("result");
// // let btn = document.getElementById("btn");
// // btn.addEventListener("click", function() {
// //     result.innerText =input.value;
// // });

// // function greet(name, callback){
// //     console.log("hello", name)
// //     callback()  
// // }

// // function welcome(){
// //     console.log("welcome to the party")
// // }
// // greet("geetha",welcome)



// // function add(a, b, callback){
// //     let sum = a+b
// //     callback(sum)
// // }  
// // function display(result){
// //     console.log("the sum is", result)
// // }
// // add(10,20,display)   



// // function orderFood(){
// //     return new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         console.log("ordering")
// //         resolve ()
// //     }, 2000)
// // }
// //     function deliverFood(resolve){
// //         return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             console.log("food delivered")
// //             resolve()
// //         }, 4000)
// //     }
// //     function serveFood(resolve){
// //         return new Promise((resolve, reject)=>{
// //             setTimeout(()=>{
// //                 console.log("food served")
// //                 resolve()
// //             }, 4000)
// //         })
// //     }
// // orderFood(()=>{
// //     deliverFood(()=>{
// //         serveFood(()=>{
// //             console.log("enjoy your meal")
// //         })          
// // }) 
// // })


// // function fetchData(callback){
// //     setTimeout(()=>{
// //         const data = {id: 1, name: "geetha"}
// //         callback(data)
// //     }, 1000)    
// //     console.log("fetching data...")
// // }
// // function userpost(data, callback){
// //     setTimeout(()=>{
// //         console.log("user post created for", data.name)
// //         callback()
// //     }, 1500)    
// //     console.log("creating user post...")
// // }
// // function getComments(callback){
// //     setTimeout(()=>{
// //         const comments = ["comment1", "comment2", "comment3"]
// //         callback(comments)
// //     }, 1000)
// //     console.log("fetching comments...") 
// // }
// // fetchData((data)=>{
// //     userpost(data, ()=>{
// //         getComments((comments)=>{
// //             console.log("comments fetched", comments)
// //         })
// //     })
// // })

// // let students = [
// //     {name: "geetha", age: 20,mark: 60,category: "clothing",amount: 1000},
// //     {name: "sudha", age: 22,mark: 70,category: "clothing",amount: 1500},
// //     {name: "sri", age: 21,mark: 50,category: "shoes",amount: 2000},
// //     {name: "sowmya", age: 19,mark: 90,category: "shoes",amount: 2500},
// //     {name: "sindhu", age: 17,mark: 85,category: "clothing",amount: 3000}
// // ]
// // const studentNames = students.map(student => student.name)
// // console.log(students)   
// // students.forEach(student => {
// //     console.log(student.age>18 ? "senior citizen" : "not a senior citizen")
// // })
// // students.forEach(student=>{
// //     if(student.age>18){
// //         console.log(student.name, "can vote")
// //     } else {
// //         console.log(student, "cannot vote")
// //     }
// // });


// // let category=students.filter(function(student){
// //     return student.category === "clothing"
// // })
// // console.log(category)

// // let age=students.filter(function(student){
// //     return student.age===20
// // })
// // console.log(age)   

// // let updateamount=students.map(function(student){
// //     if(student.category==="clothing"){
// //         student.amount=student.amount *50       
// //     }
// //     return student;
// // })
// // console.log(updateamount)  

// // let total=students.reduce(function(sum, student){
// //     return sum + student.amount
// // }, 0)
// // console.log(total)  

// // let students = [
// //     {name: "geetha", age: 20,mark: 60,category: "clothing",amount: 1000},
// //     {name: "sudha", age: 22,mark: 70,category: "clothing",amount: 1500},
// //     {name: "sri", age: 21,mark: 80,category: "shoes",amount: 2000},
// //     {name: "sowmya", age: 19,mark: 90,category: "shoes",amount: 2500},
// //     {name: "sindhu", age: 17,mark: 85,category: "clothing",amount: 3000}

// // let passmark=students.filter(function(student){
// //     return student.mark>=60
// // })
// // console.log(passmark)   

// // passmark.forEach(student=>{
// //     console.log(student.name, "passed the exam")
// // }   )   

// // let updatemark=students.map(function(student){
// //     return student.mark>=60 ? {...student, mark: student.mark + 10} : student
// // })
// // console.log(updatemark) 


// // let gracemark=students.map(function(student){
// //     return {...student, mark: student.mark + 20}
// // })
// // console.log(gracemark) 

// // let updatemarks=students.map(function(student){
// //     return{
// //         ...student,
// //         mark: student.mark-30}
// //     })
// //     console.log(updatemarks)



// //  let btn = document.getElementById("btn");
// // btn.addEventListener("click", function() {
// //     alert("Button Clicked!");
// // });
    