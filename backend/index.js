require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  addRegistration,
  getAllRegistrations,
  phoneExists,
  emailExists,
  closeDatabase
} = require('./database');
const {
  sendWelcomeSMS,
  formatPhoneNumber,
  isValidPhoneNumber,
  initRingCentral
} = require('./helpers/ringcentral');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize RingCentral SDK
initRingCentral();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'RMR Transportation API is running',
    timestamp: new Date().toISOString()
  });
});

// SMS Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, phone, consent } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and phone are required'
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        error: 'You must consent to receive SMS messages'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Validate phone number
    if (!isValidPhoneNumber(phone)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid phone number format'
      });
    }

    // Format phone number
    const formattedPhone = formatPhoneNumber(phone);

    // Check if phone already registered
    const phoneAlreadyExists = await phoneExists(formattedPhone);
    if (phoneAlreadyExists) {
      return res.status(400).json({
        success: false,
        error: 'This phone number is already registered'
      });
    }

    // Check if email already registered
    const emailAlreadyExists = await emailExists(email);
    if (emailAlreadyExists) {
      return res.status(400).json({
        success: false,
        error: 'This email is already registered'
      });
    }

    // Save registration to database
    const registration = await addRegistration({
      name,
      email,
      phone: formattedPhone,
      consent: true
    });

    // Send welcome SMS via RingCentral
    let smsStatus = null;
    try {
      await sendWelcomeSMS(formattedPhone, name);
      smsStatus = 'sent';
    } catch (smsError) {
      console.error('SMS sending failed:', smsError.message);
      smsStatus = 'failed';
      // Don't fail the registration if SMS fails
    }

    res.status(201).json({
      success: true,
      message: 'Registration successful! A confirmation SMS has been sent.',
      data: {
        id: registration.id,
        name: registration.name,
        email: registration.email,
        smsStatus
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      error: 'Registration failed. Please try again later.'
    });
  }
});

// Admin endpoint to view registrations (protected by secret)
app.get('/api/admin/registrations', async (req, res) => {
  try {
    const adminSecret = req.headers['x-admin-secret'];
    
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return res.status(403).json({
        success: false,
        error: 'Unauthorized'
      });
    }

    const registrations = await getAllRegistrations();
    
    res.json({
      success: true,
      count: registrations.length,
      data: registrations
    });

  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch registrations'
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // In a real application, you would:
    // 1. Store the message in a database
    // 2. Send an email notification to the company
    // 3. Optionally send an SMS notification

    console.log('Contact form submission:', { name, email, phone, company, message });

    res.json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚛 RMR Transportation API running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down gracefully...');
  closeDatabase();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nShutting down gracefully...');
  closeDatabase();
  process.exit(0);
});
