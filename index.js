let select = document.getElementById("select_city");
let right_div = document.getElementById("right_div");
let search_btn = document.getElementById("search_button");
let hello_btn = document.getElementById("hello_btn")
let wether_describe = document.getElementById("wether_describe")
let wether_font = document.getElementById("wether_info_font")
let temp = document.getElementById("temp_heading");
let wind = document.getElementById("wind")
let humidity = document.getElementById("humidity");
let img = document.getElementById("sky_img")
let drop = document.getElementById("drop")
// let drop=window.getComputedStyle(document.querySelector("right_div") ,':before').getPropertyValue('left')

//  const url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=relative_humidity_2m,wind_speed_10m"
const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
let response_1st
let response_2nd
let url_humidity
let url_wind
let url_time
let url_temp
let humidity_symbol
let wind_symbol
let temp_symbol
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  console.log("width=", myWidth, "height=", myHeight)
  if (myWidth <= 766) {
    right_div.style.display = "none"
    hello_btn.style.display = "block"
  }
  else {
    right_div.style.display = "block"
    hello_btn.style.display = "none"
  }
  // if(myWidth<=350){
  //   hello_btn.style.fontSize="12px"
  // }
  // else{
  //   hello_btn.style.fontSize="25px"
  // }
};
const new_Spinning = [
  { transform: "translateY(50%)" },
  { transform: "translateY(0%)" },
];
const new_Timing = {
  duration: 2000,
  iterations: 1,
};
const newspaper = document.querySelector("#hello_btn");
let inner_forecast = document.getElementById("inner_forecast")
function days_forecast(){
hello_btn.addEventListener("click", () => {
  right_div.animate(new_Spinning, new_Timing);
  right_div.style.display = "block"
  left_div.style.opacity = 0.1
  right_div.style.position = "absolute"
  inner_forecast.style.backgroundColor = "transparent"
  right_div.style.zIndex = -1
  
  
  hello_btn.innerText = "⏬Drop down"
  droplist()
});

}
days_forecast()


function droplist() {
  hello_btn.addEventListener("click", () => {
    right_div.style.display = "none"
    left_div.style.opacity = 1
       
    hello_btn.innerText = "Click to get 5 days forecast"
    days_forecast()
  })
}

async function fun() {
  response_1st = await fetch(url)
  response_2nd = await response_1st.json()
  console.log(response_1st)
  console.log("data2..", response_2nd)
  url_humidity = response_2nd.hourly.relative_humidity_2m
  console.log("humidity", response_2nd.hourly.relative_humidity_2m)
  url_wind = response_2nd.hourly.wind_speed_10m
  console.log("wind", response_2nd.hourly.wind_speed_10m)
  url_time = response_2nd.hourly.time
  console.log("time", response_2nd.hourly.time)
  url_temp = response_2nd.hourly.
    temperature_2m
  console.log("temprature", response_2nd.hourly.
    temperature_2m)
  temp_symbol = response_2nd.hourly_units.temperature_2m
  console.log(temp_symbol)
}
fun()
function city_info() {
  let random_num = Math.floor(Math.random() * 50)
  let temp_by_time = new Date()
  let time_temp = temp_by_time.getHours()
  if (select.value == "Pune") {
    time_temp = time_temp + 0
  }
  else if (select.value == "Bengaluru") {
    time_temp = time_temp + 3
  }
  else if (select.value == "Delhi") {
    time_temp = time_temp + 1
  }
  else if (select.value == "Mumbai") {
    time_temp = time_temp - 1
  }
  else if (select.value == "Bhopal") {
    time_temp = time_temp - 2
  }
  else if (select.value == "Punjab") {
    time_temp = time_temp + 2
  }
  else if (select.value == "Kashmir") {
    time_temp = time_temp - 10
  }
  else if (select.value == "Kerla") {
    time_temp = time_temp + 1
  }
  else if (select.value == "Solapur") {
    time_temp = time_temp + 4
  }
  else if (select.value == "Kolhapur") {
    time_temp = time_temp + 1
  }
  else if (select.value == "Satara") {
    time_temp = time_temp + 2
  }
  else if (select.value == "Raigad") {
    time_temp = time_temp + 3
  }
  else {
    time_temp = time_temp + 3
  }

  console.log("api temp", url_temp[time_temp])
  console.log("random number", random_num)
  info_changed = temp.innerText = url_temp[time_temp] + 15
  if (select.value == "Kashmir") {
    info_changed = temp.innerText = url_temp[time_temp] - 8
  }
  console.log("adding 15 ", info_changed)

  if (info_changed >= 20 && info_changed <= 30) {
    if (myWidth <= 420) {
      temp.style.fontSize = "20px"
      wether_describe.style.fontSize = "12px"
      temp.innerText = info_changed + (temp_symbol) + "\n Normal"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = "Good Vit-D, temprature"
      // img.innerHTML="<img src="images/cloud.jpg" class=" img-fluid " card-img " alt=" ...">"
      img.src = "images/cloud.jpg"
      temp.style.color = "black"
    }
    else {
      console.log("normal temprature");
      temp.style.fontSize = "40px"
      wether_describe.style.fontSize = "16px"
      temp.innerText = info_changed + (temp_symbol) + "\n Normal"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = "Good Vit-D, temprature"
      img.src = "images/cloud.jpg"
      temp.style.color = "black"

    }
  }
  else if (info_changed >= 30 && info_changed <= 35) {
    if (myWidth <= 420) {
      temp.style.fontSize = "20px"
      wether_describe.style.fontSize = "12px"
      temp.innerText = info_changed + (temp_symbol) + "\n Level Up  temp"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = " More than normal, temprature"
      img.src = "images/sky.jpeg"
    }
    else {
      console.log("having more than normal")
      temp.style.fontSize = "40px"
      wether_describe.style.fontSize = "16px"
      temp.innerText = info_changed + (temp_symbol) + "\n Level Up  temprature"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = " More than normal, temprature"
      img.src = "images/sky.jpeg"

    }
  }
  else if (info_changed >= 35) {
    if (myWidth <= 420) {
      temp.style.fontSize = "20px"
      wether_describe.style.fontSize = "12px"
      temp.innerText = info_changed + (temp_symbol) + "\n High \ntemp"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = " Be Hydrated, there is High temp"
      img.src = "images/sky2.jpeg"
    }
    else {
      console.log("high temparature")
      temp.style.fontSize = "40px"
      wether_describe.style.fontSize = "16px"
      temp.innerText = info_changed + (temp_symbol) + "\n High \n temprature"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = " Be Hydrated, there is High temp"
      img.src = "images/sky2.jpeg"
    }
  }
  else {
    if (myWidth <= 420) {
      temp.style.fontSize = "20px"
      wether_font.style.fontSize = "15px"
      temp.innerText = info_changed + (temp_symbol) + "\n Low temprature"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = " Low temprature"
      img.src = "images/ice.jpg"
      temp.style.color = "black"
      wether_describe.style.color = "black"
    }
    else {
      console.log("cold weather")
      temp.style.fontSize = "40px"
      wether_describe.style.fontSize = "16px"
      temp.innerText = info_changed + (temp_symbol) + "\n Low temprature"
      wind.innerText = url_wind[time_temp] + "km/hr"
      humidity.innerText = url_humidity[time_temp] - 30 + "%"
      wether_describe.innerText = " Low temprature"
      img.src = "images/ice.jpg"
      temp.style.color = "black"
      wether_describe.style.color = "black"
    }
  }
}
search_btn.addEventListener("click", () => {
  switch (select.value) {
    case 'Pune': console.log("pune")
      city_info();
      break;
    case 'Bengaluru': console.log("Bengaluru")
      city_info()
      break;
    case 'Delhi': console.log("Delhi")
      city_info()
      break;
    case 'Mumbai': console.log("Mumbai")
      city_info()
      break;
    case 'Bhopal': console.log("Bhopal")
      city_info()
      break;
    case 'Punjab': console.log("Punjab")
      city_info()
      break;
    case 'Kashmir': console.log("Kashmir")
      city_info()
      break;
    case 'Kerla': console.log("Kerla")
      city_info()
      break;
    case 'Solapur': console.log("Solapur")
      city_info()
      break;
    case 'Kolhapur': console.log("Kolhapur")
      city_info()
      break;
    case 'Satara': console.log("Satara")
      city_info()
      break;
    case 'Raigad': console.log("Raigad")
      city_info()
      break;
    case 'Nagar': console.log("Nagar")
      city_info()
      break;
    default: console.log("not valid city");
      break;
  }
})


















































































