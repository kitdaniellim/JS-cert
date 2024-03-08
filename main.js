


 
const greetingText = 'Good Noon';
const weatherCondition = 'sunny';
const userLoc = 'Philippines';
let temp = 30;
let tempType = 'C'
let localTime = new Date();

//Functions
const celsiusToFahr = (temp) => {
    let fahr = (temp * 9/5) + 32;
    return fahr;
}

const fahrToCelsius = (temp) => {
    let cel = temp - 32 * 5/9;
    return cel;
}

const getTemp = (temp) => {
    let newTemp;
    if(tempType === 'F') {
        newTemp = celsiusToFahr(temp);
    } else {
        newTemp = fahrToCelsius(temp);
    }
    
    return newTemp.toFixed(1);
}

const updateWeatherText = () => {
    let weatherText = `Weather do be ${weatherCondition} in the ${userLoc} with a temperature of ${getTemp(temp)}°${tempType} outside.`
    return weatherText;
}

const getLocalTime = () => {
    let time = new Date();
    document.querySelector('span[data-time=hours]').innerHTML = localTime.getHours().toString().padStart(2, '0');
    document.querySelector('span[data-time=minutes]').innerHTML = localTime.getMinutes().toString().padStart(2, '0');
    document.querySelector('span[data-time=seconds]').innerHTML = localTime.getSeconds().toString().padStart(2, '0');
    return time;
}

//Initialization
document.querySelector('#open-nav-menu').addEventListener('click', function(){
    document.querySelector('header nav .wrapper').classList.add('nav-open')
});

document.querySelector('#close-nav-menu').addEventListener('click', function(){
    document.querySelector('header nav .wrapper').classList.remove('nav-open')
});
document.querySelector('p#weather').innerHTML = updateWeatherText();
document.querySelector('#greeting').innerHTML = greetingText;

document.querySelector('span[data-time=hours]').innerHTML = localTime.getHours().toString().padStart(2, '0');
document.querySelector('span[data-time=minutes]').innerHTML = localTime.getMinutes().toString().padStart(2, '0');
document.querySelector('span[data-time=seconds]').innerHTML = localTime.getSeconds().toString().padStart(2, '0');

setInterval(() => {
    localTime = getLocalTime();
}, 1000);

document.querySelector('.weather-group').addEventListener('click', (e) => {
    if(e.target.id === 'fahr') {
        tempType = 'F';
    } else {
        tempType = 'C';
    }
    document.querySelector('p#weather').innerHTML = updateWeatherText();
})