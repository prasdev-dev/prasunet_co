# Vercel Deployment Checklist

## ✅ COMPLETED
- [x] Code pushed to GitHub: https://github.com/prasdev-dev/prasunet_co
- [x] All 573 commits uploaded (679.05 MiB)
- [x] Main branch set as default
- [x] Environment variables documented

## 📋 TO DO - Vercel Setup

### Step 1: Connect Repository (5 minutes)
- [ ] Go to https://vercel.com/dashboard
- [ ] Click "Add New" → "Project"
- [ ] Select "Import Git Repository"
- [ ] Choose: `prasdev-dev/prasunet_co`
- [ ] Click "Import"

### Step 2: Configure Deployment (3 minutes)
- [ ] **Root Directory:** Set to `frontend`
- [ ] **Build Command:** `npm run build` (default is fine)
- [ ] **Environment Variables:** Add these 2 variables:
  ```
  NEXT_PUBLIC_SUPABASE_URL: https://wiyqajztlthkpbbdmhub.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeXFhanp0bHRoa3BiYmRtaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODQyMDQsImV4cCI6MjA5MjI2MDIwNH0.v3VHS9NFnzes3NjbTukiiAjdejYB7slDVi_MaumeXb4
  ```

### Step 3: Deploy (2-5 minutes)
- [ ] Click "Deploy" button
- [ ] Wait for build to complete
- [ ] See deployment success message

### Step 4: Verify (5 minutes)
- [ ] Visit your live URL (will be shown after deployment)
- [ ] Test homepage loads
- [ ] Test contact form submission
- [ ] Check database connection (submit test data)
- [ ] Open browser DevTools → Console (check for errors)

## 🔗 Your Deployment Links

**Production URL (after deploy):**
```
https://prasunet-co.vercel.app
```

**GitHub Repository:**
```
https://github.com/prasdev-dev/prasunet_co
```

**Vercel Dashboard:**
```
https://vercel.com/dashboard
```

## 📚 Deployment Environments

When you set up Vercel:
- **Production**: Deploys automatically when you push to `main`
- **Preview**: Auto-created for every Pull Request
- **Development**: Optional - set up additional branches if needed

## ⚠️ Important Notes

1. **Environment Variables are Safe:** They're prefixed with `NEXT_PUBLIC_`, so they're public (no secrets here)
2. **Build Time:** First deployment takes 3-5 minutes, subsequent ones are faster
3. **Automatic Deployments:** Future pushes to GitHub automatically redeploy
4. **Custom Domain:** You can add your own domain in Vercel Settings later

## 🚨 If Something Goes Wrong

**Build fails?**
- Check Vercel build logs
- Run locally: `cd frontend && npm run build`
- Check for missing dependencies

**API routes not working?**
- Verify routes are in correct format: `/app/api/*/route.ts`
- Check environment variables in Vercel dashboard

**See detailed guide:** [VERCEL_DEPLOYMENT_SETUP.md](./VERCEL_DEPLOYMENT_SETUP.md)

---

**Status:** Ready for Vercel deployment
**Created:** 2026-04-24
