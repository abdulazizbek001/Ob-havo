const elCardTitle = document.querySelector('.card_title');
const elCardData = document.querySelector('.card_data');
const elCard = document.querySelector('.card');
const elWrapText = document.querySelector('.wrap_text');
const elCardSun = document.querySelector('.card_sun');
const elCardCloud = document.querySelector('.card_cloud');
const elCardWind = document.querySelector('.card_wind');
const elCardTemp = document.querySelector('.card_temp');
const elCardWeather = document.querySelector('.card_weather');

fetch('https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c')
    .then((rec) => rec.json())
    .then((data) => getData(data))


function getData(item) {
    let data = new Date()

    if (data.getDay() == 1) {
        elCardTitle.textContent = 'Monday';
    } else if (data.getDay() == 2) {
        elCardTitle.textContent = 'Tuesday';
    } else if (data.getDay() == 3) {
        elCardTitle.textContent = 'Wednesday';
    } else if (data.getDay() == 4) {
        elCardTitle.textContent = 'Thursday';
    } else if (data.getDay() == 5) {
        elCardTitle.textContent = 'Friday';
    } else if (data.getDay() == 6) {
        elCardTitle.textContent = 'Saturday';
    } else if (data.getDay() == 7) {
        elCardTitle.textContent = 'Sunday';
    }

    if (data.getMonth() == 0) {
        elCardData.textContent = data.getDate() + ' ' + 'Jan' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 1) {
        elCardData.textContent = data.getDate() + ' ' + 'Feb' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 2) {
        elCardData.textContent = data.getDate() + ' ' + 'Mar' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 3) {
        elCardData.textContent = data.getDate() + ' ' + 'Apr' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 4) {
        elCardData.textContent = data.getDate() + ' ' + 'May' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 5) {
        elCardData.textContent = data.getDate() + ' ' + 'Jul' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 6) {
        elCardData.textContent = data.getDate() + ' ' + 'Jun' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 7) {
        elCardData.textContent = data.getDate() + ' ' + 'Aug' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 8) {
        elCardData.textContent = data.getDate() + ' ' + 'Sep' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 9) {
        elCardData.textContent = data.getDate() + ' ' + 'Oct' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 10) {
        elCardData.textContent = data.getDate() + ' ' + 'Nov' + ' ' + data.getFullYear()
    } else if (data.getMonth() == 11) {
        elCardData.textContent = data.getDate() + ' ' + 'Dec' + ' ' + data.getFullYear()
    }

    console.log(item);
    elWrapText.textContent = `${item.name}, ${item.sys.country}`;
    elCardTemp.textContent = `${item.main.temp} °C`;
    let weather = item.weather[0];

    elCardWeather.textContent = weather.main;

    if (elCardWeather.textContent = 'Clouds') {
        elCardCloud.style.display = 'inline-block';
        elCard.style.background = 'url("https://i.makeagif.com/media/8-26-2023/cjaI99.gif")';
        elCard.style.backgroundSize = 'cover';
    } else if (elCardWeather.textContent == 'Wind') {
        elCardWind.style.display = 'inline-block';
        elCard.style.background = 'url("https://i.pinimg.com/originals/62/95/9d/62959d2cb0feb6a62ec62ce136d23a10.gif")';
        elCard.style.backgroundSize = 'cover';
    }

}

getData()