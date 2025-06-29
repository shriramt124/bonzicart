# Google Authentication Setup Guide

## Overview
This guide will help you set up Google OAuth authentication for your BonziCart application.

## Prerequisites
- A Google account
- Access to the [Google Cloud Console](https://console.cloud.google.com/)

## Steps to Set Up Google OAuth

### 1. Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top of the page
3. Click on "New Project"
4. Enter a name for your project (e.g., "BonziCart")
5. Click "Create"

### 2. Configure OAuth Consent Screen
1. In your new project, go to "APIs & Services" > "OAuth consent screen"
2. Select "External" user type (unless you have a Google Workspace organization)
3. Click "Create"
4. Fill in the required information:
   - App name: "BonziCart"
   - User support email: Your email
   - Developer contact information: Your email
5. Click "Save and Continue"
6. Skip adding scopes by clicking "Save and Continue"
7. Add test users if needed, then click "Save and Continue"
8. Review your settings and click "Back to Dashboard"

### 3. Create OAuth Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select "Web application" as the application type
4. Name: "BonziCart Web Client"
5. Add authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - Your production URL (if applicable)
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - Your production callback URL (if applicable)
7. Click "Create"
8. Note your Client ID and Client Secret

### 4. Update Environment Variables
1. Open the `.env.local` file in your project
2. Update the following variables with your credentials:
   ```
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   NEXTAUTH_URL=http://localhost:3000 (or your production URL)
   NEXTAUTH_SECRET=generate_a_random_secret_here
   ```

   To generate a random secret, you can use this command in your terminal:
   ```
   openssl rand -base64 32
   ```

### 5. Test Your Integration
1. Start your development server: `npm run dev`
2. Navigate to the login page
3. Click the "Sign in with Google" button
4. You should be redirected to Google's authentication page
5. After successful authentication, you should be redirected back to your application

## Troubleshooting

### Common Issues

1. **Redirect URI Mismatch**: Ensure that the redirect URI in your Google Cloud Console matches exactly with the callback URL used by NextAuth.

2. **Invalid Client ID or Secret**: Double-check that you've copied the correct values to your `.env.local` file.

3. **Missing Environment Variables**: Make sure all required environment variables are set.

4. **CORS Issues**: If you're experiencing CORS errors, verify that your authorized JavaScript origins are correctly set in the Google Cloud Console.

5. **API Not Enabled**: You might need to enable the Google+ API or People API in your Google Cloud project.

## Additional Resources
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)