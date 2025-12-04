async function getWeather() {
    city = document.getElementById("cityName").value
    key = "870502b743a444ed94513551251803"

    if(!city){
        alert ("Please enter city name.")
        return
    }
    url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}` 

    try{
        response = await fetch(url)
        if(!response.ok){
            document.getElementById("result").innerHTML = `<p style="color: red;">City not found, please select correct city name</p>`
        }
        data = await response.json()
        document.getElementById("result").innerHTML = `
        <h3>${data.location.name}, ${data.location.country}</h3>
        <p>temperature: ${data.current.temp_c}</p>
        <p>Feelslike: ${data.current.feelslike_c}</p>
        <p>Humidity: ${data.current.humidity}</p>
        <p>Wind direction: ${data.current.wind_dir}</p>
        <p>Wind direction: ${data.current.wind_kph}</p>`
    }catch(error){
        document.getElementById("result").innerHTML = `<p style="color: red;">Something went wrong, please try again</p>`
    }
    
}