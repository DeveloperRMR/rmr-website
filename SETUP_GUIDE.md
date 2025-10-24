# RMR TRANSPORTATION LLC - Quick Setup Guide

## ✅ Current Status

**Both servers are running successfully!**

- ✅ Backend API: `http://localhost:4000`
- ✅ Frontend: `http://localhost:3000`
- ✅ Database: SQLite initialized at `backend/data/registrations.db`
- ✅ All dependencies installed
- ✅ Environment files configured

## 🚀 Quick Start

### Already Running
If you see both servers running, open your browser to:
```
http://localhost:3000
```

### To Restart Servers

**Backend (Terminal 1):**
```bash
cd /workspaces/rmr-website/backend
npm start
```

**Frontend (Terminal 2):**
```bash
cd /workspaces/rmr-website/frontend
npm run dev
```

## 🔧 Next Steps

### 1. Configure RingCentral (Required for SMS)

Edit `/workspaces/rmr-website/.env` and add your RingCentral credentials:

```env
RINGCENTRAL_CLIENT_ID=your_actual_client_id
RINGCENTRAL_CLIENT_SECRET=your_actual_client_secret
RINGCENTRAL_USERNAME=your_actual_username
RINGCENTRAL_PASSWORD=your_actual_password
FROM_PHONE_NUMBER=+15734151555
```

**Get RingCentral credentials:**
1. Go to https://developers.ringcentral.com
2. Create an account (or login)
3. Create a new app
4. Copy your Client ID and Client Secret
5. Use your RingCentral account username and password

### 2. Test the Website

Open `http://localhost:3000` and test:

- ✅ Home page loads with hero section
- ✅ Navigation works (Home, Register, Privacy Policy, SMS Terms)
- ✅ Contact form submission
- ✅ SMS registration form (will need RingCentral configured)
- ✅ Mobile responsive design

### 3. Test API Endpoints

**Health Check:**
```bash
curl http://localhost:4000/api/health
```

**Contact Form:**
```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "5551234567",
    "message": "Test message"
  }'
```

**SMS Registration (requires RingCentral):**
```bash
curl -X POST http://localhost:4000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "5551234567",
    "consent": true
  }'
```

**View Registrations (admin only):**
```bash
curl http://localhost:4000/api/admin/registrations \
  -H "x-admin-secret: change_this_to_a_strong_secret"
```

## 📦 Deployment

### Frontend → Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd frontend
   vercel
   ```

3. Set environment variable in Vercel dashboard:
   - `VITE_API_URL` = your production backend URL

### Backend → Render

1. Create account at https://render.com
2. Create new **Web Service**
3. Connect GitHub repo: `AlonurKomilov/rmr-website`
4. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add all environment variables from `.env`
6. Deploy

### After Deployment

1. Update `frontend/.env` production value:
   ```env
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

2. Redeploy frontend on Vercel

3. Test SMS registration end-to-end

## 🎨 Website Features

### Home Page (`/`)
- Hero section with trucking background
- Company stats (24/7, 50+ states, 100% reliable, DOT number)
- About section with safety, speed, and customer focus
- 4 service cards:
  - Freight Dispatching
  - Truckload Transportation
  - Owner-Operator Support
  - 24/7 Logistics Coordination
- Contact form with validation
- Professional dark theme

### Register Page (`/register`)
- SMS registration form
- Name, email, phone, consent checkbox
- Real-time validation
- Success/error feedback
- Sends confirmation SMS via RingCentral
- Benefits list
- Help section

### Privacy Policy (`/privacy-policy`)
- Comprehensive privacy information
- GDPR/CCPA compliance
- SMS communications section
- Data security and retention
- User rights and opt-out
- Contact information

### SMS Terms (`/sms-terms`)
- TCPA compliance details
- Service description
- Opt-out instructions (STOP/HELP)
- Message frequency and costs
- Support information
- Disclaimers and limitations

## 🛠️ Tech Stack

**Frontend:**
- React 18 + Vite
- TailwindCSS
- React Router
- Axios

**Backend:**
- Node.js + Express
- SQLite3
- RingCentral SDK
- CORS + dotenv

## 📱 SMS Features

- Welcome message on registration
- STOP keyword to opt-out
- HELP keyword for assistance
- Phone validation (E.164 format)
- Duplicate prevention
- TCPA compliant

## 🔒 Security

- ✅ Environment variables (never commit `.env`)
- ✅ Input validation
- ✅ SQL injection protection (parameterized queries)
- ✅ CORS configured
- ✅ Admin endpoint protected with secret
- ⚠️ Add HTTPS in production
- ⚠️ Consider rate limiting for APIs

## 📞 Support

**Company Contact:**
- Email: info@rmrtransportationllc.com
- Phone: +1 (573) 415-1555
- Address: 5203 Oakleaf Dr, Kansas City, Missouri 64129 Apt 3
- USDOT: 3590337

## 🐛 Common Issues

### SMS Not Sending
- Add RingCentral credentials to `.env`
- Restart backend server
- Check RingCentral account status

### Frontend Won't Connect
- Verify backend is running on port 4000
- Check `frontend/.env` has correct API URL
- Review CORS settings

### Port Already in Use
```bash
# Kill process on port 4000 (backend)
lsof -ti:4000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

## ✨ Ready to Deploy!

Your professional trucking website is complete and ready for production deployment. Follow the deployment steps above when ready to go live.

---

**Built for RMR TRANSPORTATION LLC**
*Moving America Forward, One Load at a Time.*
