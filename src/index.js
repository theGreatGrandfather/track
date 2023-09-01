document.addEventListener('DOMContentLoaded', function () {
    const modalForm = document.querySelector('.truckload__form');
    const TOKEN = '6407921969:AAGnKf8qyUQ3H2x0SNI61kLnO0qEHU1R2Ik';
    const CHAT_ID = '-1001903507381';
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    
    modalForm.addEventListener('submit', formSend);

    function sendMessage(formData) {
        let messageToTg = `<b>New small action</b>\n`;
        for (let entry of formData.entries()) {
            if (entry[1] !== '') {
                messageToTg += `${entry[0]} : ${entry[1]}\n`;
            }
        }
        return messageToTg;
    }

    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(modalForm);
        const messageToTg = sendMessage(formData);
        try {
            await axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: messageToTg,
            });
            modalForm.reset();
            console.log('Message sent to Telegram successfully.');
        } catch (error) {
            console.error('Error sending message to Telegram:', error);
        }
    }
});