# Deployment Guide - React + Spring Boot

## Environment Variables for Frontend Deployment

### Required Environment Variable:

**`VITE_API_URL`** - The URL of your deployed backend API

## Step-by-Step Deployment

### Step 1: Deploy Backend First (Railway)

1. Go to [Railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select: `Mukilan-Kumar/New10-labs`
5. Click "Add variables" and add:

```
SPRING_DATASOURCE_URL=jdbc:postgresql://aws-1-ap-south-1.pooler.supabase.com:6543/postgres
SPRING_DATASOURCE_USERNAME=postgres.kfxqazgjxkwfndjvwpmg
SPRING_DATASOURCE_PASSWORD=18Lx7NzMTsfdAKeq
SERVER_PORT=8080
```

6. In Settings:
   - Root Directory: `backend`
   - Build Command: `mvn clean package -DskipTests`
   - Start Command: `java -jar target/diagnostic-lab-backend-1.0.0.jar`

7. Click "Deploy"
8. Once deployed, copy your backend URL (e.g., `https://newtonlabs-backend.up.railway.app`)

### Step 2: Deploy Frontend (Vercel)

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import: `Mukilan-Kumar/New10-labs`
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

6. Add Environment Variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.railway.app/api`
   - (Replace with your actual Railway backend URL from Step 1)

7. Click "Deploy"

### Step 3: Update Backend CORS

After frontend is deployed, update backend CORS configuration:

1. Go to your backend code: `backend/src/main/java/com/newtonlab/config/CorsConfig.java`
2. Add your Vercel URL to allowed origins:

```java
configuration.setAllowedOrigins(Arrays.asList(
    "http://localhost:3000",
    "http://localhost:5173",
    "https://your-frontend-url.vercel.app"  // Add this
));
```

3. Commit and push changes
4. Railway will automatically redeploy

## Environment Variables Summary

### Frontend (Vercel)

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_API_URL` | `https://your-backend.railway.app/api` | Backend API endpoint |

### Backend (Railway)

| Variable | Value | Description |
|----------|-------|-------------|
| `SPRING_DATASOURCE_URL` | `jdbc:postgresql://...` | Database connection URL |
| `SPRING_DATASOURCE_USERNAME` | `postgres.kfxqazgjxkwfndjvwpmg` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | `18Lx7NzMTsfdAKeq` | Database password |
| `SERVER_PORT` | `8080` | Server port |

## Alternative: Deploy to Netlify (Frontend)

If you prefer Netlify over Vercel:

1. Go to [Netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub: `Mukilan-Kumar/New10-labs`
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`

5. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://your-backend-url.railway.app/api`

6. Click "Deploy site"

## Alternative: Deploy Backend to Render

If you prefer Render over Railway:

1. Go to [Render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect GitHub: `Mukilan-Kumar/New10-labs`
4. Configure:
   - **Name**: `newtonlabs-backend`
   - **Root Directory**: `backend`
   - **Build Command**: `mvn clean package -DskipTests`
   - **Start Command**: `java -jar target/diagnostic-lab-backend-1.0.0.jar`

5. Add Environment Variables (same as Railway)
6. Click "Create Web Service"

## Testing Your Deployment

After deployment, test these endpoints:

1. **Backend Health Check**:
   ```
   https://your-backend-url.railway.app/api/tests
   ```
   Should return JSON array of tests

2. **Frontend**:
   ```
   https://your-frontend-url.vercel.app
   ```
   Should load the homepage

3. **API Connection**:
   - Go to Tests page
   - Should load tests from backend
   - Check browser console for any CORS errors

## Troubleshooting

### CORS Errors
- Add your frontend URL to backend CORS configuration
- Redeploy backend after changes

### Backend Not Starting
- Check Railway/Render logs
- Verify database credentials
- Ensure Java 17+ is being used

### Frontend Shows "Network Error"
- Verify `VITE_API_URL` is set correctly
- Check if backend is running
- Test backend URL directly in browser

### Data Not Loading
- Check if DataLoader ran successfully in backend logs
- Verify database connection
- Run `insert_data.sql` manually in Supabase if needed

## Security Recommendations

Before going to production:

1. ✅ Use environment variables for all sensitive data
2. ✅ Enable HTTPS (automatic on Vercel/Railway)
3. ✅ Add rate limiting to backend
4. ✅ Enable Row Level Security in Supabase
5. ✅ Add authentication/authorization
6. ✅ Remove console.log statements
7. ✅ Add error monitoring (Sentry)
8. ✅ Set up backup strategy for database

## Cost Estimates

### Free Tier Limits:

**Vercel (Frontend)**:
- ✅ Free for personal projects
- Unlimited bandwidth
- Automatic HTTPS

**Railway (Backend)**:
- ✅ $5 free credit per month
- ~500 hours of runtime
- Pay as you go after free credit

**Supabase (Database)**:
- ✅ Free tier: 500MB database
- 2GB bandwidth
- Unlimited API requests

**Total**: $0-5/month for small traffic

## Support

If you encounter issues:
1. Check deployment logs in Vercel/Railway
2. Verify environment variables are set correctly
3. Test backend API endpoints directly
4. Check browser console for frontend errors

## Next Steps After Deployment

1. Set up custom domain (optional)
2. Configure email notifications
3. Add Google Analytics
4. Set up monitoring and alerts
5. Create backup strategy
6. Add CI/CD pipeline
