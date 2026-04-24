# Cloudflare Pages API Routes Fix - 405 Error Solution

## Problem
You were getting **405 Method Not Allowed** errors on all API routes because Cloudflare Pages wasn't recognizing Next.js API endpoints.

### Console Errors
```
POST /api/subscribe 405 (Method Not Allowed)
POST /api/CareerApplication 405 (Method Not Allowed)  
POST /api/contact 405 (Method Not Allowed)
```

## Root Cause
The Next.js configuration was set to `output: "export"` which creates a **static-only build** without server-side API routes. Cloudflare Pages needs special configuration to handle Next.js API routes.

## Solution: Use @cloudflare/next-on-pages Adapter

I've updated your project to use the official Cloudflare adapter for Next.js API routes:

### Changes Made
✅ **Updated `next.config.ts`**
- Changed `output: "export"` → `output: "standalone"`
- This enables server-side rendering and API routes

✅ **Updated `package.json`**
- Added `@cloudflare/next-on-pages` to devDependencies
- Updated build command to: `next build && next-on-pages`
- This adapter transforms Next.js for Cloudflare Workers

✅ **Created `wrangler.toml`**
- Cloudflare Workers configuration file
- Tells Cloudflare how to serve your app

## Deployment Steps

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Verify Build Locally
```bash
npm run build
```
Should complete without errors and create `.next` directory.

### Step 3: Update Cloudflare Pages Build Settings

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Pages** → Your project → **Settings**
3. Go to **Builds & deployments** section
4. Update these settings:

| Setting | Old Value | New Value |
|---------|-----------|-----------|
| Build command | `next build` | `npm install && npm run build` |
| Build output directory | `out` or `.next` | `.next/server` |
| Root directory | `/` | `frontend` (if not already) |

5. **Save and Deploy**

### Step 4: Push Code & Trigger Deployment
```bash
git add .
git commit -m "fix: Setup Cloudflare Pages with next-on-pages adapter for API routes"
git push origin main
```

This will trigger an automatic rebuild with the new settings.

### Step 5: Wait for Deployment
- Wait 2-3 minutes for Cloudflare to build and deploy
- Check **Deployments** tab for status (should show "Success")

### Step 6: Test Forms
After deployment completes, test each form:
1. **Newsletter**: Scroll to footer, enter email, click subscribe
   - ✅ Should see: "✅ Successfully subscribed to our newsletter!"
2. **Career**: Go to `/career`, click "Apply Now", fill form
   - ✅ Should see: Success modal
3. **Business**: Go to `/business`, fill form
   - ✅ Should see: Success message  
4. **Contact**: Go to `/contact`, fill form
   - ✅ Should see: "Message sent successfully!"

## Verification

### Check if API routes are working
Open browser console (F12) and look for:
- ❌ **Before**: `POST /api/subscribe 405 (Method Not Allowed)`
- ✅ **After**: `POST /api/subscribe 201 (Created)` or `400 (Bad Request)` with proper error message

### If Still Getting 405 Errors
1. **Clear Cloudflare cache**: Dashboard → Caching → Purge Everything
2. **Hard refresh browser**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. **Check deployment logs**:
   - Cloudflare Dashboard → Pages → Your project → Deployments
   - Click recent build → View logs
   - Look for build errors

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Build fails with "next-on-pages not found" | Run `npm install` in `/frontend` directory |
| Still getting 405 errors | Verify build output directory is `.next/server` in Cloudflare settings |
| Deployment takes long time | This is normal - can take 3-5 minutes first time |
| Pages still show old content | Clear Cloudflare cache and hard refresh browser |

## Important Notes

- **@cloudflare/next-on-pages** transforms your Next.js app to run on Cloudflare Workers
- This gives full API route support on Cloudflare Pages (no Node.js server needed)
- All environment variables (NEXT_PUBLIC_*) still work as before
- Supabase configuration remains the same

## Troubleshooting

If forms still don't work after deployment:

1. **Open browser console (F12)**
2. **Check for errors** - look for specific HTTP status codes
3. **Test API directly** in console:
   ```javascript
   const response = await fetch('/api/subscribe', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ email: 'test@example.com' })
   });
   const data = await response.json();
   console.log('Status:', response.status);
   console.log('Response:', data);
   ```

4. **Check Cloudflare build logs** for compilation errors

## Files Modified
- ✅ `frontend/next.config.ts` - Changed output to "standalone"
- ✅ `frontend/package.json` - Added @cloudflare/next-on-pages and updated build command
- ✅ `frontend/wrangler.toml` - Created new Cloudflare Workers config

## Reference
- [Cloudflare Next.js Support](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [@cloudflare/next-on-pages GitHub](https://github.com/cloudflare/next-on-pages)
