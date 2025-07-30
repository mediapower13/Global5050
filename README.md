# Global 50:50 Concepts Website

A modern, full-stack website for Global 50:50 Concepts Nig. Ltd., built with Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, and Formspree.

## 🚀 Features

- **Full-Stack Application**: Server-side rendering, API routes, and server actions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Form**: Dual system with Formspree email delivery and PostgreSQL storage
- **Database Integration**: PostgreSQL for persistent data storage
- **Email Notifications**: Formspree integration for reliable email delivery
- **Google Maps Integration**: Embedded maps for office locations
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Newsletter Signup**: Email subscription functionality with database storage
- **Modern UI**: Clean design with shadcn/ui components and beautiful animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **Email Service**: Formspree
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd global-5050-concepts-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Configure your environment variables in `.env.local`:
\`\`\`env
# Database
DATABASE_URL=postgresql://global5050_user:B9niPf2YqfRjgVn7ovzWmQWiHQ6I6erE@dpg-d23qaiidbo4c7385b8qg-a.oregon-postgres.render.com/global5050

# Formspree
FORMSPREE_FORM_ID=xzzvgvel
FORMSPREE_ENDPOINT=https://formspree.io/f/xzzvgvel

# Company Info
COMPANY_EMAIL=global5050conceptsnigltd@yahoo.com
COMPANY_PHONE=0906 736 1349
\`\`\`

5. Set up the database:
\`\`\`bash
npm run db:setup
\`\`\`

6. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🗄️ Database Setup

The application uses PostgreSQL with the following tables:
- `contact_submissions` - Stores contact form submissions
- `newsletter_subscriptions` - Stores newsletter subscriptions
- `quote_requests` - For future quote request functionality

Run the database setup script to create all necessary tables:
\`\`\`bash
npm run db:setup
\`\`\`

## 📧 Email Configuration

### Formspree Integration
The application uses Formspree (Form ID: xzzvgvel) for reliable email delivery:
- Automatic email notifications to company email
- Form validation and spam protection
- Professional email templates
- Delivery confirmations

### Database Storage
All form submissions are also stored in PostgreSQL for:
- Data persistence and backup
- Analytics and reporting
- Customer relationship management
- Compliance and record keeping

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
Make sure to set these in your deployment platform:
\`\`\`env
DATABASE_URL=your_postgresql_connection_string
FORMSPREE_FORM_ID=xzzvgvel
FORMSPREE_ENDPOINT=https://formspree.io/f/xzzvgvel
COMPANY_EMAIL=global5050conceptsnigltd@yahoo.com
COMPANY_PHONE=0906 736 1349
\`\`\`

## 🗺️ Google Maps Setup

The maps are embedded using Google Maps Embed API. For production:
1. Get a Google Maps API key
2. Replace the iframe URLs with your API key
3. Enable Maps Embed API in Google Cloud Console

## 📱 Features Overview

- **Home Page**: Hero section with animations, company overview, service highlights
- **About Page**: Tabbed sections for story, mission/vision, values, leadership, achievements
- **Services Page**: Detailed service offerings with features
- **Products Page**: Cement brands and other products with filtering
- **Projects Page**: Portfolio showcase with project categories
- **Locations Page**: Filterable office locations with embedded maps
- **Contact Page**: Advanced contact form with dual email/database system
- **Testimonials Page**: Customer success stories and reviews

## 🎨 Design Features

- **Color Scheme**: Professional blue, white, and ash theme
- **Animations**: Smooth fade-in, scale, and hover effects
- **Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized images and lazy loading

## 🔧 Customization

### Colors
The website uses a professional blue, white, and ash color scheme defined in `globals.css` and Tailwind configuration.

### Content
Edit the page content in the respective files under `app/`

### Styling
Modify components in the `components/` directory

## 📊 Analytics & Monitoring

The application includes:
- Contact form submission tracking
- Newsletter subscription analytics
- Error logging and monitoring
- Performance metrics

## 🔒 Security Features

- Form validation and sanitization
- CSRF protection
- Rate limiting (can be added)
- SQL injection prevention
- XSS protection

## 📄 License

© 2024 Global 50:50 Concepts Nig. Ltd. All rights reserved.

## 🆘 Support

For technical support or questions:
- Email: global5050conceptsnigltd@yahoo.com
- Phone: 0906 736 1349
- Visit any of our locations across Nigeria
# Global5050
