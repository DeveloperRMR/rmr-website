# RMR TRANSPORTATION LLC - Professional Trucking Website

![RMR Transportation](https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop)

A modern, professional website for **RMR TRANSPORTATION LLC** - a semi-truck freight and logistics company operating across the United States.

## 🚛 Company Information

- **Company Name:** RMR TRANSPORTATION LLC
- **Email:** info@rmrtransportationllc.com
- **Phone:** +1 (573) 415-1555
- **Address:** 5203 Oakleaf Dr, Kansas City, Missouri 64129 Apt 3
- **USDOT:** 3590337
- **Slogan:** *"Moving America Forward, One Load at a Time."*

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **SQLite3** - Lightweight database for registrations
- **RingCentral SDK** - SMS service integration
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
rmr-website/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx      # Landing page with hero, services, contact
│   │   │   ├── Register.jsx  # SMS registration form
│   │   │   ├── PrivacyPolicy.jsx
│   │   │   └── SmsTerms.jsx
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx    # Navigation bar
│   │   │   └── Footer.jsx    # Site footer
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── main.jsx          # React entry point
│   │   └── index.css         # Global styles and Tailwind
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── backend/                  # Node.js backend API
│   ├── index.js              # Express server and API routes
│   ├── database.js           # SQLite database setup
│   ├── helpers/
│   │   └── ringcentral.js    # RingCentral SMS integration
│   ├── data/
│   │   └── registrations.db  # SQLite database (auto-created)
│   └── package.json
│
├── .env.example              # Example environment variables
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **RingCentral account** (for SMS functionality)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlonurKomilov/rmr-website.git
   cd rmr-website
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Edit .env and fill in your RingCentral credentials
   nano .env
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Create frontend .env file:**
   ```bash
   cd frontend
   cp .env.example .env
   # Edit if needed (default points to localhost:4000)
   ```

### Environment Variables

#### Backend (.env in root)
```env
PORT=4000
NODE_ENV=development
DB_PATH=./backend/data/registrations.db

# RingCentral credentials (get from https://developers.ringcentral.com)
RINGCENTRAL_CLIENT_ID=your_client_id
RINGCENTRAL_CLIENT_SECRET=your_client_secret
RINGCENTRAL_SERVER=https://platform.ringcentral.com
RINGCENTRAL_USERNAME=your_username
RINGCENTRAL_PASSWORD=your_password
FROM_PHONE_NUMBER=+15734151555

# Company info
COMPANY_NAME="RMR TRANSPORTATION LLC"
COMPANY_EMAIL="info@rmrtransportationllc.com"
COMPANY_ADDRESS="5203 Oakleaf Dr, Kansas City, Missouri 64129 Apt 3"

# Admin secret (for /api/admin/registrations endpoint)
ADMIN_SECRET=your_strong_secret_here
```

#### Frontend (frontend/.env)
```env
VITE_API_URL=http://localhost:4000
```

### Running Locally

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Backend runs on http://localhost:4000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

Open your browser to `http://localhost:5173`

## 📱 Features

### Main Pages

### 1. **Home Page**
- Hero section with trucking imagery and company slogan
- About section highlighting safety, reliability, and nationwide service
- Services section showcasing 4 key offerings:
  - Freight Dispatching
  - Truckload Transportation
  - Owner-Operator Support
  - 24/7 Logistics Coordination
- Contact form with phone, email, and address
- Company statistics and achievements
- Responsive design optimized for mobile and desktop

### 2. **About Page**
- Company story and mission statement
- Core values (Safety, Reliability, Driver-Focus, Integrity)
- Team structure and operations
- DOT compliance and safety program
- Certifications and service coverage
- Professional stats showcase

### 3. **Services Page**
- Detailed core services (Freight Dispatching, FTL, Owner-Operator Support, 24/7 Logistics)
- Additional services (Cross-docking, Route Planning, Back Office Support, etc.)
- Why choose us section with competitive advantages
- Service coverage across all 48 contiguous states
- CTA sections for quotes and contact

### 4. **Contact Page**
- Multiple contact methods (Phone, Email, Office location)
- Comprehensive contact form with company field
- Business hours and emergency contact information
- Google Maps integration for office location
- "How Can We Help?" section with inquiry types
- Quick response commitment

### Legal Pages (Footer Only)

### 5. **Privacy Policy**
- Comprehensive privacy information
- GDPR and CCPA compliance sections
- Data collection and usage details
- SMS communication policies
- User rights and opt-out procedures
- Last updated date

### 6. **SMS Terms & Conditions** (Optional Feature)
- TCPA compliance details
- Message frequency and timing information
- Cost and carrier charge disclaimers
- Opt-out instructions (STOP, HELP commands)
- Service description and limitations
- Contact information for support

**Note:** SMS registration is an optional feature. The website works perfectly as a professional logistics company site without it.

### 7. **Backend API**

#### Endpoints:

**GET /api/health**
- Health check endpoint
- Returns API status

**POST /api/contact**
- Submit contact form
- Body: `{ name, email, phone, company, message }`
- Validates and logs contact requests
- Used on Home and Contact pages

**POST /api/register** (Optional)
- Register for SMS notifications
- Body: `{ name, email, phone, consent }`
- Validates input and prevents duplicates
- Sends welcome SMS via RingCentral
- Stores registration in SQLite

**GET /api/admin/registrations**
- View all SMS registrations (protected)
- Requires `x-admin-secret` header
- Returns all registrations with timestamps

## 🎨 Design

- **Dark Theme:** Professional trucking aesthetic with dark backgrounds
- **Color Palette:**
  - Primary Blue: `#3B82F6`
  - Orange Accent: `#F97316`
  - Dark Backgrounds: `#0F172A`, `#1E293B`, `#334155`
- **Typography:** Inter and Poppins fonts
- **Animations:** Smooth fade-in, slide-up, and hover effects
- **Responsive:** Mobile-first design with Tailwind breakpoints

## 📦 Deployment

### Frontend - Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd frontend
   vercel
   ```

3. **Set environment variable in Vercel dashboard:**
   - `VITE_API_URL` = your production backend URL

4. **Vercel Configuration (vercel.json):**
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```

### Backend - Render / Railway

#### Option 1: Render

1. Create new **Web Service** on [Render](https://render.com)
2. Connect your GitHub repository
3. Set **Root Directory:** `backend`
4. **Build Command:** `npm install`
5. **Start Command:** `npm start`
6. Add environment variables from `.env.example`
7. Deploy

#### Option 2: Railway

1. Create new project on [Railway](https://railway.app)
2. Connect repository
3. Set **Root Directory:** `backend`
4. Add environment variables
5. Deploy automatically on push

### Post-Deployment

1. Update frontend `VITE_API_URL` to point to production backend
2. Update CORS settings in `backend/index.js` if needed
3. Test SMS registration flow end-to-end
4. Verify all pages load correctly
5. Check mobile responsiveness

## 🔒 Security Considerations

- **Environment Variables:** Never commit `.env` files to Git
- **Admin Endpoint:** Protect `/api/admin/registrations` with strong secret
- **CORS:** Configure for specific domains in production
- **Rate Limiting:** Consider adding rate limiting for API endpoints
- **Input Validation:** All inputs are validated server-side
- **SQL Injection:** Using parameterized queries with SQLite
- **HTTPS:** Always use HTTPS in production

## 📞 SMS Integration

The site uses **RingCentral** for SMS delivery:

1. **Sign up** at [RingCentral Developers](https://developers.ringcentral.com)
2. **Create an app** and get credentials
3. **Add credentials** to `.env`
4. **SMS Features:**
   - Welcome message upon registration
   - STOP/HELP keyword support
   - Phone number validation
   - Duplicate prevention

## 🧪 Testing

### Backend Testing
```bash
cd backend

# Health check
curl http://localhost:4000/api/health

# Register for SMS
curl -X POST http://localhost:4000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "5551234567",
    "consent": true
  }'

# View registrations (requires admin secret)
curl http://localhost:4000/api/admin/registrations \
  -H "x-admin-secret: your_admin_secret"
```

### Frontend Testing
- Open `http://localhost:5173` in browser
- Test all navigation links
- Submit registration form
- Submit contact form
- Test mobile responsiveness (DevTools)
- Verify SMS delivery (check your phone)

## 🐛 Troubleshooting

### SMS Not Sending
- Verify RingCentral credentials in `.env`
- Check RingCentral account status
- Ensure phone number is in E.164 format
- Review backend logs for errors

### Frontend Not Connecting to Backend
- Verify `VITE_API_URL` in `frontend/.env`
- Check backend is running on correct port
- Review CORS settings in `backend/index.js`

### Database Errors
- Ensure `backend/data/` directory exists
- Check file permissions
- Verify `DB_PATH` in `.env`

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Update dependencies: `npm update`

## 📄 License

© 2025 RMR TRANSPORTATION LLC. All Rights Reserved.

## 🤝 Support

For technical support or inquiries:
- **Email:** info@rmrtransportationllc.com
- **Phone:** +1 (573) 415-1555
- **Address:** 5203 Oakleaf Dr, Kansas City, Missouri 64129 Apt 3

---

**Built with ❤️ for professional trucking and logistics**