# Vercel Deployment Checklist for Global 50:50 Concepts

## Pre-Deployment Setup

### 1. Formspree Setup (Required for Contact Form)
- [x] Sign up at [https://formspree.io/](https://formspree.io/)
- [x] Create a new form for contact submissions
- [x] Copy the form ID: `xzzvgvel`
- [ ] (Optional) Create a second form for newsletter subscriptions
- [ ] Test forms work with your email

### 2. Environment Variables
Set these in your Vercel dashboard under Settings > Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
FORMSPREE_FORM_ID=xzzvgvel
FORMSPREE_NEWSLETTER_ID=xzzvgvel
COMPANY_EMAIL=info@global5050concepts.com
```

### 3. Repository Setup
- [ ] Push all code to GitHub/GitLab
- [ ] Ensure `main` branch is up to date
- [ ] Verify no sensitive data in commits

## Deployment Steps

### 1. Import to Vercel
- [ ] Go to [vercel.com](https://vercel.com) and sign in
- [ ] Click "New Project"
- [ ] Import your repository
- [ ] Choose "Next.js" as framework (should auto-detect)

### 2. Configure Environment Variables
- [ ] Add all environment variables listed above
- [ ] Double-check form IDs are correct
- [ ] Set production domain URL

### 3. Deploy
- [ ] Click "Deploy"
- [ ] Wait for build to complete (2-3 minutes)
- [ ] Check deployment logs for any errors

## Post-Deployment Testing

### 1. Basic Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Responsive design works on mobile

### 2. Contact Form Testing
- [ ] Fill out contact form with test data
- [ ] Submit form and check for success message
- [ ] Verify email received in your inbox
- [ ] Check Formspree dashboard for submission

### 3. Newsletter Testing
- [ ] Test newsletter signup
- [ ] Verify confirmation message appears
- [ ] Check for any error messages

## Common Issues & Solutions

### Contact Form Not Working
**Issue**: Form submits but no email received
**Solution**: 
- Check Formspree form ID is correct
- Verify form is not in test mode
- Check spam folder

### 404 Errors
**Issue**: Pages show 404 error
**Solution**:
- Check `vercel.json` is deployed
- Verify all environment variables are set
- Check build logs for errors

### Images Not Loading
**Issue**: Images show broken
**Solution**:
- Check `next.config.mjs` has correct image domains
- Verify images exist in `/public` folder
- Check browser console for errors

## Maintenance

### Regular Tasks
- [ ] Monitor Formspree submission limits
- [ ] Check deployment logs occasionally
- [ ] Update dependencies monthly
- [ ] Backup any important data

### When Issues Occur
1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally first
4. Check Formspree dashboard
5. Review browser console errors

---

## Emergency Contacts & Resources

- **Vercel Support**: [vercel.com/help](https://vercel.com/help)
- **Formspree Support**: [help.formspree.io](https://help.formspree.io)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

**Note**: Since this project uses in-memory storage for development, form submissions will only be temporarily stored during serverless function execution. All persistent data should go through Formspree for production use.
