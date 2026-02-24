const cityText = document.getElementById('cityInput');
const btn = document.getElementById('searchBtn');

const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temperature');
const desc = document.getElementById('description');

let URL = "https://api.openweathermap.org/data/2.5/weather?q=ชื่อเมืองที่จะหา&appid=4905c6bcc4489d3b76202ffe8b17b224&units=metric&lang=th"

const getweatherAPI = async () => {
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityText.value}&appid=4905c6bcc4489d3b76202ffe8b17b224&units=metric&lang=th`
    console.log(URL);
    try {
        console.log(cityText.value + "\tหรอ อืม....")
        let API = await fetch(URL)
        let data = await API.json()

        console.log('เสร็จแล้วค้าบบ');
        weatherResult.style.display = 'block'
        cityName.innerText = data.name;
        temp.innerText = data.main.temp;
        desc.innerText = data.weather[0].description;

    } catch (error) {
        console.log("พังเพราะ: ", error);
        alert("หาเมืองนี้ไม่เจอครับ ลองเช็คตัวสะกดดูอีกทีนะ! 🌍");
    }
}
btn.addEventListener('click', getweatherAPI);