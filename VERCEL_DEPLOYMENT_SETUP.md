# Vercel Deployment Setup Guide

## ✅ Prerequisites Completed
- ✅ Code pushed to: https://github.com/prasdev-dev/prasunet_co
- ✅ Node.js project configured
- ✅ Environment variables identified

## Step 1: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your account
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Find and select **`prasdev-dev/prasunet_co`** repository
5. Click **"Import"**

## Step 2: Configure Project Settings

In the import dialog:

### Root Directory
- Set to: `frontend`
- This tells Vercel to build from the frontend folder

### Build Command
- Use default or set to: `npm run build`

### Output Directory
- Keep default (Vercel auto-detects Next.js)

### Environment Variables
Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://wiyqajztlthkpbbdmhub.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpeXFhanp0bHRoa3BiYmRtaHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODQyMDQsImV4cCI6MjA5MjI2MDIwNH0.v3VHS9NFnzes3NjbTukiiAjdejYB7slDVi_MaumeXb4
```

**Note:** These are "public" environment variables (prefixed with `NEXT_PUBLIC_`), so they're safe to expose.

## Step 3: Configure Multiple Environments

### Production (main branch)
- Automatically deploys on pushes to `main`
- URL: `prasunet-co.vercel.app` (default)

### Staging/Preview
- Automatically created for pull requests
- URL: `prasunet-co-[random].vercel.app`

### Development (optional)
- Create a `develop` branch
- In Vercel Settings → Git → Production Branch
- You can set different branches for different environments

## Step 4: Deploy

1. Click **"Deploy"** button
2. Wait for build to complete (usually 2-5 minutes)
3. Once complete, you'll see: ✅ **Production deployment successful**

## Verification Checklist

After deployment, verify:

- [ ] Website loads at `https://prasunet-co.vercel.app`
- [ ] All pages load without errors
- [ ] API routes work (contact form, career applications, etc.)
- [ ] Supabase connection successful
- [ ] Database operations functioning
- [ ] Images and assets loading correctly
- [ ] Responsive design works on mobile
- [ ] No console errors in browser dev tools

## Troubleshooting

### Build Fails
**Error:** `Cannot find module` or `npm ERR!`
- Solution: Check `frontend/package.json` dependencies
- Run locally: `cd frontend && npm install && npm run build`

### API Routes Not Working
**Error:** 405 Method Not Allowed
- Solution: Check `/api` folder structure
- Ensure routes are in `app/api/*/route.ts`
- Verify middleware configuration

### Environment Variables Not Loading
**Error:** Variables undefined in browser console
- Solution: Restart deployment in Vercel
- Prefix public vars with `NEXT_PUBLIC_`
- Check Vercel Settings → Environment Variables

### Supabase Connection Error
**Error:** Connection refused / 503
- Verify URL and Key in Vercel environment variables
- Check Supabase project is active
- Verify firewall/CORS settings

## Environment Variable Reference

| Variable | Purpose | Type | Required |
|----------|---------|------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Public | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase API key | Public | Yes |
| `DATABASE_URL` | Database connection string | Secret | No |

## Post-Deployment

### Custom Domain (Optional)
1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

### Analytics
- View in Vercel dashboard → Analytics
- Monitor deployment performance and errors

### Rollback
If deployment causes issues:
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Monitoring
- View logs: Deployments → Recent → Click deployment → Logs
- Real-time monitoring: Settings → Monitoring
- Error tracking available in Vercel dashboard

## Git Workflow

### Deploy to Production
```bash
git push origin main
```
Vercel automatically deploys on push to main branch

### Deploy to Staging
```bash
# Create feature branch
git checkout -b feature/my-feature

# Make changes and push
git push origin feature/my-feature

# Create Pull Request on GitHub
# Vercel automatically creates preview deployment
```

### View Preview
- GitHub will show preview link in PR comments
- Or check Vercel dashboard → Deployments

## Useful Vercel Commands

### Install Vercel CLI (Optional)
```bash
npm i -g vercel
```

### Deploy from local machine
```bash
cd frontend
vercel
```

### View deployment logs
```bash
vercel logs [deployment-url]
```

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel
3. Configure custom domain (optional)
4. Set up analytics and monitoring
5. Configure additional environments if needed
6. Set up CI/CD notifications (optional)

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Vercel Support:** support@vercel.com

---

**Deployment Status:** Ready for Vercel
**Last Updated:** 2026-04-24
