# Supabase Authentication Setup Guide

This guide will help you set up Supabase Authentication for the Prasunet website.

## Prerequisites

1. A Supabase project
2. Supabase Authentication enabled
3. Environment variables configured

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New project"
3. Fill in your project details and wait for setup to complete

### 2. Enable Authentication

1. In your Supabase project dashboard, go to "Authentication" in the left sidebar
2. The Email provider should already be enabled by default
3. (Optional) Configure additional providers like Google, GitHub, etc.

### 3. Get Supabase Configuration

1. Go to "Settings" → "API" in your Supabase dashboard
2. Copy the "Project URL" and "anon public" key

## Environment Variables

Create a `.env.local` file in the `frontend` directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Database (for Prisma - optional, if you want to store additional user data)
DATABASE_URL=your_database_url_here
```

Replace the placeholder values with your actual Supabase configuration.

## Database Setup (Optional)

If you want to store additional user profile data beyond what Supabase provides, you can use Prisma with a separate database. The User model is included in the schema for this purpose.

### 1. Update Prisma Schema

The User model has been added to your Prisma schema. To apply the changes:

```bash
cd frontend
npx prisma migrate dev --name add_user_model
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

## Features Included

### Authentication Pages
- **Sign In** (`/signin`): Email/password login
- **Sign Up** (`/signup`): User registration with validation

### Navigation Integration
- Auth buttons in desktop navigation
- Auth buttons in mobile menu
- User info display when logged in
- Logout functionality

### Components
- `AuthProvider`: Context provider for authentication state
- `SignIn` page: Login form with validation
- `SignUp` page: Registration form with password confirmation
- Updated `Navbar`: Shows auth status and buttons

### Security Features
- Password visibility toggle
- Form validation
- Error handling
- SSR-safe Supabase client initialization

## Usage

### For Users
1. Click "Sign Up" to create an account
2. Fill in the registration form
3. Click "Sign In" to log into existing accounts
4. User info appears in navigation when logged in
5. Click "Logout" to sign out

### For Developers
- Use `useAuth()` hook to access authentication state
- Available methods: `signIn`, `signUp`, `logout`
- User state: `user`, `session`, `loading`

## Supabase Auth Features

Supabase provides:
- **Email/Password Authentication**: Built-in user management
- **Session Management**: Automatic token refresh
- **User Metadata**: Store additional user information
- **Security**: Row Level Security (RLS) policies
- **Real-time**: Live updates for auth state changes

## Next Steps

1. Set up Supabase configuration in your environment
2. Test the authentication flow
3. Configure email templates in Supabase dashboard
4. Set up password reset functionality
5. Add email verification if needed
6. Configure additional auth providers (Google, GitHub, etc.)

## Troubleshooting

- **Build errors**: Make sure Supabase URL and key are properly set
- **Auth not working**: Check Supabase dashboard for enabled providers
- **SSR issues**: Supabase client is designed to work with SSR
- **Database errors**: Ensure DATABASE_URL is set for Prisma migrations (optional)