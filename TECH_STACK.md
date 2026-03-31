# Complete Tech Stack - New10labs Diagnostic Lab

## 📋 Overview

This project consists of two main applications:
1. **Original**: Next.js application (https://new10-labs.vercel.app/)
2. **React Version**: React + Spring Boot application (https://new10-labs-react.vercel.app/)

---

## 🎨 Frontend Technologies

### Original Next.js Application

#### Core Framework
- **Next.js 16.1.6** - React framework with server-side rendering
- **React 19.2.3** - UI library
- **React DOM 19.2.3** - React rendering
- **TypeScript 5.9.3** - Type-safe JavaScript

#### Styling & UI
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.24** - CSS vendor prefixing
- **Framer Motion 12.34.3** - Animation library
- **React Icons 5.5.0** - Icon library
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 3.5.0** - Merge Tailwind classes

#### State Management
- **Zustand 5.0.11** - Lightweight state management

#### Database & Backend Integration
- **Supabase JS 2.98.0** - PostgreSQL database client
- **Neon Database Serverless 1.0.2** - Serverless PostgreSQL

#### Email Services
- **Nodemailer 8.0.1** - Email sending
- **Resend 6.9.3** - Modern email API

#### Security
- **bcryptjs 3.0.3** - Password hashing

#### Development Tools
- **ESLint 9** - Code linting
- **eslint-config-next 16.1.6** - Next.js ESLint config

---

### React Version (New10-labs-react)

#### Core Framework
- **React 18.2.0** - UI library
- **React DOM 18.2.0** - React rendering
- **Vite 5.0.8** - Build tool and dev server
- **React Router DOM 6.20.0** - Client-side routing

#### Styling & UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **PostCSS 8.4.32** - CSS processing
- **Autoprefixer 10.4.16** - CSS vendor prefixing
- **Framer Motion 10.18.0** - Animation library
- **React Icons 5.6.0** - Icon library
- **Lucide React 1.7.0** - Icon library

#### HTTP Client
- **Axios 1.6.2** - HTTP client for API calls

#### Build Tools
- **@vitejs/plugin-react 4.2.1** - Vite React plugin

---

## 🔧 Backend Technologies

### Spring Boot Backend

#### Core Framework
- **Spring Boot 3.2.0** - Java application framework
- **Java 17** - Programming language
- **Maven** - Build tool and dependency management

#### Spring Boot Starters
- **spring-boot-starter-web** - RESTful web services
- **spring-boot-starter-data-jpa** - JPA/Hibernate ORM
- **spring-boot-starter-validation** - Bean validation
- **spring-boot-starter-mail** - Email support
- **spring-boot-starter-test** - Testing framework

#### Database
- **PostgreSQL** - Relational database
- **Supabase** - PostgreSQL hosting (cloud)
- **Hibernate** - ORM (via Spring Data JPA)

#### Development Tools
- **Spring Boot DevTools** - Hot reload and development utilities
- **Lombok** - Reduce boilerplate code (optional)

#### Deployment
- **Docker** - Containerization
- **Render** - Backend hosting platform

---

## 🗄️ Database

### PostgreSQL (Supabase)

#### Tables
1. **tests** - Diagnostic test information
   - id, name, price, mrp, category, department
   - sample_type, tat, fasting_required, status

2. **packages** - Health checkup packages
   - id, name, price, mrp, category
   - test_count, includes, description, status

3. **consultations** - Doctor consultation bookings
   - id, name, email, phone, date, time
   - consultation_type, message, status

4. **home_visit_bookings** - Home visit requests
   - id, name, email, phone, address
   - date, time, test_type, status

5. **support_callbacks** - Support requests
   - id, name, email, phone, message
   - status, created_at

6. **cart_items** - Shopping cart (if implemented)
   - id, user_id, item_id, item_type, quantity

---

## 🚀 Deployment & Hosting

### Frontend Deployment
- **Vercel** - Hosting platform for both Next.js and React apps
  - Original: https://new10-labs.vercel.app/
  - React: https://new10-labs-react.vercel.app/
- **Auto-deployment** - Deploys on push to main branch
- **Environment Variables** - Managed in Vercel dashboard

### Backend Deployment
- **Render** - Backend hosting
  - URL: https://new10-labs-react-backend.onrender.com
- **Docker** - Containerized deployment
- **Environment Variables** - Database credentials, CORS origins

### Database Hosting
- **Supabase** - PostgreSQL database hosting
- **Connection Pooling** - Enabled for performance
- **SSL** - Secure connections

---

## 📦 Package Managers

- **npm** - Node.js package manager (frontend)
- **Maven** - Java dependency management (backend)

---

## 🔐 Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=https://new10-labs-react-backend.onrender.com/api
```

### Backend (application.properties)
```
spring.datasource.url=jdbc:postgresql://[supabase-host]/postgres
spring.datasource.username=[username]
spring.datasource.password=[password]
spring.jpa.hibernate.ddl-auto=update
server.port=${PORT:8080}
server.address=0.0.0.0
```

---

## 🛠️ Development Tools

### Code Quality
- **ESLint** - JavaScript/TypeScript linting
- **TypeScript** - Type checking (Next.js version)

### Version Control
- **Git** - Version control system
- **GitHub** - Code repository
  - Original: https://github.com/Mukilan-Kumar/New10-labs
  - React: https://github.com/Mukilan-Kumar/New10-labs-react

### API Testing
- **Thunder Client / Postman** - API testing
- **Browser DevTools** - Frontend debugging

---

## 📱 Key Features & Libraries

### Animations
- **Framer Motion** - Page transitions, hover effects, scroll animations
- **CSS Transitions** - Smooth UI interactions

### Icons
- **React Icons** - Comprehensive icon library
- **Lucide React** - Modern icon set

### Forms & Validation
- **Bean Validation** - Backend validation (Spring)
- **HTML5 Validation** - Frontend validation

### Responsive Design
- **Tailwind CSS** - Mobile-first responsive utilities
- **CSS Grid & Flexbox** - Layout systems

### Communication
- **WhatsApp Integration** - Direct booking via WhatsApp
- **Email** - Nodemailer/Spring Mail for notifications

---

## 🔄 API Architecture

### RESTful Endpoints

#### Tests
- `GET /api/tests` - Get all tests
- `GET /api/tests?category={category}` - Filter by category
- `GET /api/tests?search={query}` - Search tests

#### Packages
- `GET /api/packages` - Get all packages
- `GET /api/packages/{id}` - Get package by ID

#### Consultations
- `POST /api/consultations` - Book consultation
- `GET /api/admin/consultations` - Get all consultations (admin)
- `PUT /api/admin/consultations/update` - Update consultation status

#### Home Visits
- `POST /api/home-visits` - Book home visit

#### Support
- `POST /api/support/callback` - Request callback

#### Search
- `GET /api/search?q={query}` - Search tests and packages

---

## 📊 Performance Optimizations

### Frontend
- **Code Splitting** - Lazy loading components
- **Image Optimization** - Optimized images
- **Caching** - Browser caching strategies
- **Minification** - Production builds minified

### Backend
- **Connection Pooling** - Database connection management
- **Caching** - Query result caching
- **Indexing** - Database indexes for fast queries

---

## 🔒 Security Features

### Frontend
- **HTTPS** - Secure connections
- **Environment Variables** - Sensitive data protection
- **CORS** - Cross-origin resource sharing configured

### Backend
- **CORS Configuration** - Allowed origins whitelist
- **Input Validation** - Bean validation
- **SQL Injection Prevention** - JPA/Hibernate parameterized queries
- **Password Hashing** - bcryptjs (if auth implemented)

---

## 📈 Monitoring & Analytics

### Deployment Monitoring
- **Vercel Analytics** - Frontend performance
- **Render Logs** - Backend monitoring
- **Supabase Dashboard** - Database monitoring

---

## 🎯 Browser Support

- **Chrome/Edge** (Chromium) - ✅ Full support
- **Firefox** - ✅ Full support
- **Safari** - ✅ Full support
- **Mobile Browsers** - ✅ Responsive design

---

## 📝 Documentation

- **README.md** - Project overview
- **API Documentation** - Endpoint specifications
- **Component Documentation** - React component usage
- **Deployment Guides** - Setup instructions

---

## 🔄 CI/CD Pipeline

### Automatic Deployment
1. **Push to GitHub** - Code changes committed
2. **Vercel Build** - Frontend builds automatically
3. **Render Deploy** - Backend deploys on push
4. **Database Migrations** - Hibernate auto-update

---

## 📞 Contact & Support

- **Phone**: 9360264347
- **Email**: mukilan021@gmail.com
- **WhatsApp**: https://wa.me/919360264347
- **Location**: Chennai, 600102

---

## 🏆 Summary

### Original (Next.js)
- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel

### React Version
- **Frontend**: React 18 + Vite
- **Backend**: Spring Boot 3.2 + Java 17
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel (frontend) + Render (backend)

Both versions provide the same functionality with different architectural approaches!

---

**Last Updated**: 2026-03-31
**Version**: 1.0
