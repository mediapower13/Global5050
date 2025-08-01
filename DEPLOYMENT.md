# Global 50:50 Concepts Website

A modern, responsive website for Global 50:50 Concepts built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Contact System**: Contact form with Formspree integration
- **Newsletter**: Email subscription functionality
- **SEO Optimized**: Meta tags, structured data, and proper semantics
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Accessibility**: WCAG compliant with proper ARIA labels

## Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd global-5050-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your actual values in `.env.local`

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### Prerequisites

1. **Formspree Account** (for contact forms)
   - Sign up at [https://formspree.io/](https://formspree.io/)
   - Create a contact form and get the form ID
   - Create a newsletter form (optional) and get the form ID

### Deploy Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables:

   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   FORMSPREE_FORM_ID=your_formspree_form_id
   FORMSPREE_NEWSLETTER_ID=your_newsletter_form_id
   COMPANY_EMAIL=your-email@domain.com
   ```

3. **Deploy**
   - Click "Deploy" and wait for deployment to complete

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Your site's URL for canonical links | Yes |
| `FORMSPREE_FORM_ID` | Formspree form ID for contact form | Yes |
| `FORMSPREE_NEWSLETTER_ID` | Formspree form ID for newsletter | Optional |
| `COMPANY_EMAIL` | Your company email for notifications | Optional |

## Important Notes for Vercel Deployment

### Database Considerations

This project currently uses in-memory storage for development. For production on Vercel:

1. **Data Persistence**: In-memory data resets on each serverless function invocation
2. **Recommended Solutions**:
   - Use Formspree for form handling (implemented)
   - Add Vercel KV for simple key-value storage
   - Integrate with Supabase, PlanetScale, or other databases

### Configuration Files

- `next.config.mjs`: Configured for Vercel deployment
- `vercel.json`: Deployment settings and security headers
- `.env.example`: Template for environment variables

## Troubleshooting

### Common Issues

1. **404 Errors on Vercel**
   - Check environment variables are set correctly
   - Verify Formspree form IDs are valid
   - Check API routes are deployed properly

2. **Contact Form Not Working**
   - Verify `FORMSPREE_FORM_ID` is set correctly
   - Check Formspree dashboard for form submissions
   - Ensure Formspree form is not in test mode

3. **Build Errors**
   - Check all TypeScript errors are resolved
   - Verify all imports are correct
   - Check package.json for dependency issues

### Development vs Production

- **Localhost**: Uses in-memory storage, works normally
- **Vercel**: Serverless functions, data doesn't persist between requests
- **Solution**: Use external services (Formspree) for data persistence

## Project Structure

```
global-5050-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (pages)/           # Page components
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional styles
```

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Forms**: Formspree integration
- **Deployment**: Vercel
- **Package Manager**: pnpm

## License

© 2024 Global 50:50 Concepts. All rights reserved.
