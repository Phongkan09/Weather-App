const cityText = document.getElementById('cityInput');
const btn = document.getElementById('searchBtn');

const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const temp = document.getElementById('temperature');
const desc = document.getElementById('description');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

let URL1 = "https://api.openweathermap.org/data/2.5/weather?q=ชื่อเมืองที่จะหา&appid=4905c6bcc4489d3b76202ffe8b17b224&units=metric&lang=th"
let URL2 = "https://dummyjson.com/quotes/random"

const getweatherAPI = async () => {
    URL1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityText.value}&appid=4905c6bcc4489d3b76202ffe8b17b224&units=metric&lang=th`
    console.log(URL1);
    console.log(URL2);
    try {
        console.log(cityText.value + "\tหรอ อืม....")
        let [weatherAPI, quotesAPI] = await Promise.all([fetch(URL1), fetch(URL2)]);
        let weatherDATA = await weatherAPI.json(), quotesDATA = await quotesAPI.json()

        console.log('เสร็จแล้วค้าบบ');
        weatherResult.style.display = 'block'
        cityName.innerText = weatherDATA.name;
        temp.innerText = weatherDATA.main.temp;
        desc.innerText = weatherDATA.weather[0].description;
        quoteText.innerText = quotesDATA.quote;
        quoteAuthor.innerText = quotesDATA.author;

    } catch (error) {
        console.log("พังเพราะ: ", error);
        alert("หาเมืองนี้ไม่เจอครับ ลองเช็คตัวสะกดดูอีกทีนะ! 🌍");
    }
}
btn.addEventListener('click', getweatherAPI);