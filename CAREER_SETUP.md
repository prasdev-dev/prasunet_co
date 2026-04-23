# Career Application System Setup Guide

This guide will help you set up the career application system for the Prasunet website.

## Components Created

1. **Frontend:** `/frontend/app/career/page.tsx` - Enterprise-level career page with application form
2. **API Route:** `/frontend/app/api/CareerApplication/route.ts` - Backend API for handling submissions
3. **Database Schema:** `career_table.sql` - Supabase table schema

## Setup Instructions

### Step 1: Create the Database Table

1. Log in to your Supabase dashboard
2. Navigate to the SQL Editor
3. Create a new query
4. Copy and paste the contents of `career_table.sql`
5. Execute the query

Alternatively, use the Supabase CLI:
```bash
supabase db push
```

### Step 2: Verify Environment Variables

Ensure your `.env.local` file in the frontend directory contains:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Step 3: Test the Career Page

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000/career`

3. Click "Apply Now" to open the application form

4. Fill out the form and submit

### Features Included

✅ **Professional Design**
- Enterprise-level UI inspired by tech companies
- Gradient backgrounds and smooth transitions
- Responsive design (mobile, tablet, desktop)

✅ **Multi-Step Form**
- Step 1: Personal Information (Name, Email, Phone)
- Step 2: Professional Details (Resume, Job Title, Experience)
- Step 3: Additional Info (Cover Letter, LinkedIn, GitHub, Portfolio)

✅ **Country Code Support**
- 50+ countries with flag emojis
- Easy phone number formatting
- Dropdown for quick selection

✅ **Job Listings**
- Featured job openings section
- Benefits showcase
- Call-to-action sections

✅ **Form Validation**
- Required field validation
- Email format validation
- Real-time error messages

✅ **Success Feedback**
- Success modal after submission
- Auto-close and redirect after 3 seconds

## Database Schema

The `career_applications` table includes:
- `id` (UUID) - Unique identifier
- `first_name` - Applicant's first name
- `last_name` - Applicant's last name
- `email` - Contact email
- `phone` - Contact phone number
- `job_title` - Position applied for
- `experience` - Years of experience
- `resume_url` - Link to resume/CV
- `cover_letter` - Optional cover letter (max 1000 chars)
- `linkedin` - Optional LinkedIn profile URL
- `github` - Optional GitHub profile URL
- `portfolio` - Optional portfolio website URL
- `applied_at` - Submission timestamp

## API Endpoint

**POST** `/api/CareerApplication`

### Request Body
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "jobTitle": "Senior Software Engineer",
  "experience": "5",
  "resumeUrl": "https://drive.google.com/file/...",
  "coverLetter": "I'm interested in...",
  "linkedin": "https://linkedin.com/in/john",
  "github": "https://github.com/john",
  "portfolio": "https://johndoe.com"
}
```

### Response
```json
{
  "message": "Application submitted successfully",
  "data": {
    "id": "uuid",
    ...
  }
}
```

## Troubleshooting

### Issue: Form submission fails with "API error"
**Solution:**
1. Check that the `career_applications` table exists in Supabase
2. Verify Supabase credentials in `.env.local`
3. Check browser console for detailed error messages
4. Ensure RLS policies are correctly set

### Issue: Country code dropdown not working
**Solution:**
1. Clear browser cache
2. Hard refresh the page (Cmd+Shift+R on Mac)
3. Check that all country codes are properly formatted

### Issue: Form fields not validating
**Solution:**
1. Ensure JavaScript is enabled in the browser
2. Check console for any JavaScript errors
3. Try submitting with valid data format

## Customization

### Add More Country Codes
Edit the `countryCodes` array in `/app/career/page.tsx`:
```typescript
const countryCodes = [
  { code: "+new_code", name: "🇫🇱 Country Name" },
  // ...
];
```

### Add More Job Titles
Edit the `jobTitles` array:
```typescript
const jobTitles = [
  "Your Job Title",
  // ...
];
```

### Modify Job Listings
Edit the `jobs` array to add/remove featured positions

### Update Benefits Section
Edit the `benefits` array with new benefits

## Notes

- The career page is fully responsive and works on mobile devices
- Form submissions are real-time without page reload
- All form data is stored in Supabase
- Email and phone fields are indexed for quick lookups
- Row-level security ensures data privacy

## Support

For issues or questions, please refer to:
- Supabase Documentation: https://supabase.com/docs
- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
