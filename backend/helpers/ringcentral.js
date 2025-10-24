const SDK = require('@ringcentral/sdk').SDK;

// RingCentral SDK instance
let rcsdk = null;
let platform = null;

/**
 * Initialize RingCentral SDK
 */
function initRingCentral() {
  if (rcsdk) {
    return rcsdk;
  }

  rcsdk = new SDK({
    server: process.env.RINGCENTRAL_SERVER || 'https://platform.ringcentral.com',
    clientId: process.env.RINGCENTRAL_CLIENT_ID,
    clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET
  });

  platform = rcsdk.platform();

  console.log('RingCentral SDK initialized');
  return rcsdk;
}

/**
 * Authenticate with RingCentral
 * @returns {Promise<boolean>} - True if authenticated
 */
async function authenticate() {
  try {
    if (!platform) {
      initRingCentral();
    }

    await platform.login({
      username: process.env.RINGCENTRAL_USERNAME,
      password: process.env.RINGCENTRAL_PASSWORD,
      extension: process.env.RINGCENTRAL_EXTENSION || ''
    });

    console.log('RingCentral authentication successful');
    return true;
  } catch (error) {
    console.error('RingCentral authentication failed:', error.message);
    throw error;
  }
}

/**
 * Send SMS via RingCentral
 * @param {string} toPhone - Recipient phone number (E.164 format)
 * @param {string} message - SMS message content
 * @returns {Promise<Object>} - Response from RingCentral
 */
async function sendSMS(toPhone, message) {
  try {
    // Ensure we're authenticated
    if (!platform || !(await platform.loggedIn())) {
      await authenticate();
    }

    const fromPhone = process.env.FROM_PHONE_NUMBER;
    
    if (!fromPhone) {
      throw new Error('FROM_PHONE_NUMBER not configured');
    }

    const response = await platform.post('/restapi/v1.0/account/~/extension/~/sms', {
      from: { phoneNumber: fromPhone },
      to: [{ phoneNumber: toPhone }],
      text: message
    });

    const data = await response.json();
    console.log('SMS sent successfully to:', toPhone);
    return data;
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw error;
  }
}

/**
 * Send welcome SMS to new registrant
 * @param {string} phone - Recipient phone number
 * @param {string} name - Recipient name
 * @returns {Promise<Object>} - SMS response
 */
async function sendWelcomeSMS(phone, name) {
  const companyName = process.env.COMPANY_NAME || 'RMR TRANSPORTATION LLC';
  const companyPhone = process.env.COMPANY_PHONE || '+1 (573) 415-1555';
  
  const message = `Hello ${name}! Welcome to ${companyName}. You're now registered for SMS notifications about loads, scheduling, and logistics updates. Reply STOP to opt out. Questions? Call ${companyPhone}`;

  return await sendSMS(phone, message);
}

/**
 * Format phone number to E.164 format
 * @param {string} phone - Phone number in various formats
 * @returns {string} - E.164 formatted phone number
 */
function formatPhoneNumber(phone) {
  // Remove all non-digit characters
  let cleaned = phone.replace(/\D/g, '');
  
  // If it starts with 1 and is 11 digits, it's already correct
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return '+' + cleaned;
  }
  
  // If it's 10 digits, add +1
  if (cleaned.length === 10) {
    return '+1' + cleaned;
  }
  
  // If it already starts with + return as is
  if (phone.startsWith('+')) {
    return phone;
  }
  
  // Otherwise, assume US number and add +1
  return '+1' + cleaned;
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
function isValidPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
}

module.exports = {
  initRingCentral,
  authenticate,
  sendSMS,
  sendWelcomeSMS,
  formatPhoneNumber,
  isValidPhoneNumber
};
