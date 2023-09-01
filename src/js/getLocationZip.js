if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var apiKey = '6ddf7ebd5c3e4dd48abbd5d0d7ed1997'; // Замініть на свій API ключ OpenCage

    // Створення запиту до API OpenCage
    var requestUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
            var zipCode = data.results[0].components.postcode;
            console.log("Ваш поштовий індекс (zip code): " + zipCode);
            } else {
            console.log("Поштовий індекс не знайдено.");
            }
        })
        .catch(error => {
            console.error("Помилка під час отримання поштового індексу: " + error);
        });
    });
} else {
    console.log("Геолокація не підтримується цим браузером.");
}