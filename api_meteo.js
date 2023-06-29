const apiKey = 'dc6bcada76c9b5a010a131214616faff';
const form = document.querySelector('form');
const bouton = document.querySelector('button');
const cityInput = document.getElementById('cityInput');
console.log(cityInput);
const temp = document.getElementById('temperature');
const vent = document.getElementById('windSpeed');
const pression = document.getElementById('pressure');
const humidite = document.getElementById('humidity');
 
 
form.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const city = cityInput.value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 
    fetch(url)
        .then(response => response.json())
        .then(data => { 
          temperature(data);
          pressure(data);
          windspeed(data);
          humidity(data);
        })
        .catch(err => displayError(err));
});

function temperature(data) {
  temp.innerText = data.main.temp + ' °';
}

function pressure(data) {
  pression.innerText = data.main.pressure + ' Pa';
}
 
function windspeed(data) {
  vent.innerText = data.wind.speed + ' (m/s)';
}

function humidity(data) {
  humidite.innerText = data.main.humidity + ' %';
}


// function displayError(message) {
//   affichage.innerHTML = `
//   <p>Erreur : ${message}</p>
// `;
// }

//     .then((res) => {
//         if (res.status === 200) {
//             error && setError(false);
//             return res.json();
//         } else {
//             throw new Error("Quelque chose s'est mal passé!");
//         }
//     })
//     .then((data) => {
//         setData(data);
//     })
//     .catch(() => setError(true))
 
 
// const handleSearch = (e) => {
//     if (e.key === "Enter") {
//         setCityName(e.target.value);
//         setInputText("");
//     }
// };