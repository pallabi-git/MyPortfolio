const emailjs = require('@emailjs/nodejs');

const SERVICE_ID = 'service_r18spjo';
const TEMPLATE_ID = 'template_0x30sjs';
const PUBLIC_KEY = 'KKZ8zSCIkKLhIAc7y';
const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY; // Set this in your Netlify environment variables

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const data = JSON.parse(event.body);
    const templateParams = {
      from_name: data.from_name,
      from_email: data.from_email,
      from_company: data.from_company,
      subject: data.subject,
      message: data.message,
    };

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      {
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent', result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
