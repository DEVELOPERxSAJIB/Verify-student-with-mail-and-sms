// const dotenv = require('dotenv').config();
// const twilio = require('twilio')(process.env.AUTH_SID, process.env.AUTH_TOKEN);

// const twilio_cell = process.env.AUTH_CELL;


// const sendSMS = ( to, sms ) => {

//     twilio.messages.create({
//         from : twilio_cell,
//         to : to,
//         body : sms
//     })
//     .then( res => {
//         console.log(`Message sent successfully`);
//     })
//     .catch( error => {
//         console.log(error.message);
//     })

// }

// // module exports
// module.exports = sendSMS


// require axios for bulksmsbd
const axios = require('axios');

const bulkSMS = async (number, message) => {
	await axios.get(
		`https://bulksmsbd.net/api/smsapi?api_key=DsXn9YT9V0RzVmRoOqvX&type=text&number=${number}&senderid=8809601004414&message=${message}`
	);
}

module.exports = bulkSMS;