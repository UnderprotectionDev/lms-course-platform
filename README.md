<div align="center">
  <h1>LMS Course Platform 📚</h1>

<!-- Start Generation Here -->
<p>A full-stack Learning Management System (LMS) built with Next.js. Features include course creation, student enrollment, progress tracking, video lessons, and payment processing, powered by a modern tech stack.</p>
<!-- End Generation Here -->
</div>

![Homepage](/public/readme-images/homepage.png)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-FF6B6B?style=for-the-badge&logo=auth0&logoColor=white)](https://www.better-auth.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![AWS S3](https://img.shields.io/badge/AWS_S3-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/s3/)
[![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)](https://stripe.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Arcjet](https://img.shields.io/badge/Arcjet-7C3AED?style=for-the-badge&logo=shield&logoColor=white)](https://arcjet.com/)
[![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)](https://resend.com/)

</div>

## ✨ Features

<div align="center">

| Feature                | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| 🔐 User Authentication | Secure sign-up/sign-in with Better Auth, GitHub OAuth, and Email OTP. |
| 📚 Course Management   | Create, edit, and organize courses with chapters and lessons.         |
| ⬆️ File Uploads        | Seamless file uploading for course materials using AWS S3.            |
| ▶️ Video Lessons       | Rich lesson content with video support and progress tracking.         |
| 💳 Payment Processing  | Secure course enrollment with Stripe integration.                     |
| 📊 Progress Tracking   | Track student progress through lessons and courses.                   |
| 👨‍💼 Admin Dashboard     | Comprehensive admin panel for course and user management.             |
| 📱 Responsive Design   | Optimized for various screen sizes using Tailwind CSS.                |
| 🛡️ Security            | Advanced bot protection and rate limiting with Arcjet.                |
| ✍️ Rich Text Editor    | Create engaging course content with Tiptap editor.                    |
| 📧 Email Notifications | Automated email notifications using Resend.                           |
| 🎨 Modern UI           | Built with Shadcn/ui components and styled with Tailwind CSS.         |

</div>

## 🌟 Tech Highlights

- User authentication and management with Better Auth and GitHub OAuth.
- Course creation and management system with chapters and lessons.
- File upload and storage powered by AWS S3.
- Payment processing and subscription management with Stripe.
- PostgreSQL database with Prisma ORM for type-safe data access.
- Security and bot protection implemented with Arcjet.
- Email notifications and OTP verification using Resend.
- Rich text editing capabilities with Tiptap.
- Modern UI components from Shadcn/ui styled with Tailwind CSS.
- Progress tracking and analytics with Recharts.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/lms-course-platform.git

cd lms-course-platform

# Install dependencies
npm install
# or
pnpm install

# Create your environment variables file
cp .env.example .env

# Set up your database
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the application.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>

### Core Frameworks & Libraries

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)** - Library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript.
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation with static type inference.
- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible forms with easy validation.

### Backend & Database

- **[Prisma](https://prisma.io/)** - Type-safe database toolkit and ORM.
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open-source relational database.
- **[Better Auth](https://www.better-auth.com/)** - Modern authentication library for TypeScript.
- **[AWS S3](https://aws.amazon.com/s3/)** - Object storage service for file uploads.
- **[Stripe](https://stripe.com/)** - Payment processing platform.
- **[Resend](https://resend.com/)** - Modern email API for developers.

### Security & Performance

- **[Arcjet](https://arcjet.com/)** - Security layer with bot detection and rate limiting.
- **[@t3-oss/env-nextjs](https://env.t3.gg/)** - Type-safe environment variables.

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework.
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS.
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives with accessibility.
- **[Lucide React](https://lucide.dev/)** & **[Tabler Icons](https://tabler-icons.io/)** - Icon libraries.
- **[Tiptap](https://tiptap.dev/)** - Headless rich text editor.
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Dark mode support.

### Data Visualization & Interaction

- **[Recharts](https://recharts.org/)** - Composable charting library for React.
- **[DND Kit](https://dndkit.com/)** - Drag and drop toolkit for React.
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel components.
- **[Canvas Confetti](https://github.com/catdad/canvas-confetti)** - Celebration animations.

### Development Tools

- **[ESLint](https://eslint.org/)** - Pluggable linting utility.
- **[Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typographic defaults.
- **[Date-fns](https://date-fns.org/)** - Modern JavaScript date utility library.

</details>

## 📸 Screenshots

<div align="center">

### 👨‍🎓 User Dashboard

![User Dashboard](/public/readme-images/user-dashboard.png)

### 📺 Lesson Page

![Lesson Page](/public/readme-images/lesson-page.png)

### 👨‍💼 Admin Dashboard

![Admin Dashboard](/public/readme-images/admin-dashboard.png)

### 📚 Admin Courses

![Admin Courses](/public/readme-images/admin-courses.png)

### ➕ Create Course

![Create Course](/public/readme-images/create-course.png)

### ✏️ Edit Course - Basic Info

![Edit Course Basic](/public/readme-images/edit-course-basic.png)

### 📖 Edit Course - Structure

![Edit Course Structure](/public/readme-images/edit-course-structure.png)

### 📝 Edit Lesson

![Edit Lesson](/public/readme-images/edit-lesson.png)

</div>

## 🔐 Environment Variables

Create a `.env` file in the root of your project and add the following environment variables. Refer to the documentation of each service for detailed setup.

| Variable                            | Description                                    | Found In          |
| ----------------------------------- | ---------------------------------------------- | ----------------- |
| `DATABASE_URL`                      | Connection URL for your PostgreSQL database.   | Database Provider |
| `BETTER_AUTH_SECRET`                | Secret key for Better Auth session encryption. | Generate Random   |
| `BETTER_AUTH_URL`                   | Base URL of your application.                  | Your Domain       |
| `AUTH_GITHUB_CLIENT_ID`             | GitHub OAuth application client ID.            | GitHub OAuth App  |
| `AUTH_GITHUB_CLIENT_SECRET`         | GitHub OAuth application client secret.        | GitHub OAuth App  |
| `RESEND_API_KEY`                    | API key for Resend email service.              | Resend Dashboard  |
| `ARCJET_KEY`                        | API key for Arcjet security service.           | Arcjet Dashboard  |
| `AWS_ACCESS_KEY_ID`                 | AWS access key for S3 operations.              | AWS IAM           |
| `AWS_SECRET_ACCESS_KEY`             | AWS secret key for S3 operations.              | AWS IAM           |
| `AWS_ENDPOINT_URL_S3`               | S3 endpoint URL (for custom S3 providers).     | AWS/Provider      |
| `AWS_ENDPOINT_URL_IAM`              | IAM endpoint URL (for custom providers).       | AWS/Provider      |
| `AWS_REGION`                        | AWS region for your S3 bucket.                 | AWS Console       |
| `NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES` | S3 bucket name for image storage.              | AWS S3 Console    |
| `STRIPE_SECRET_KEY`                 | Stripe secret key for payment processing.      | Stripe Dashboard  |
| `STRIPE_WEBHOOK_SECRET`             | Stripe webhook endpoint secret.                | Stripe Dashboard  |

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/lms_db

# Better Auth
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000

# GitHub OAuth
AUTH_GITHUB_CLIENT_ID=your-github-client-id
AUTH_GITHUB_CLIENT_SECRET=your-github-client-secret

# Email Service
RESEND_API_KEY=your-resend-api-key

# Security
ARCJET_KEY=your-arcjet-key

# AWS S3
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_ENDPOINT_URL_S3=https://s3.amazonaws.com
AWS_ENDPOINT_URL_IAM=https://iam.amazonaws.com
AWS_REGION=us-east-1
NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES=your-s3-bucket-name

# Stripe
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
```

## 🏗️ Project Structure

```
lms-course-platform/
├── app/                          # Next.js app directory
│   ├── (auth)/                   # Auth routes group
│   ├── (public)/                 # Public routes group
│   ├── admin/                    # Admin panel routes
│   ├── dashboard/                # Student dashboard routes
│   ├── api/                      # API routes
│   └── data/                     # Data access layer
├── components/                   # Reusable UI components
│   ├── ui/                       # Shadcn/ui components
│   ├── sidebar/                  # Sidebar components
│   ├── file-uploader/            # File upload components
│   └── rich-text-editor/         # Rich text editor components
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Authentication configuration
│   ├── db.ts                     # Database connection
│   ├── env.ts                    # Environment variables
│   └── utils.ts                  # Utility functions
├── hooks/                        # Custom React hooks
├── prisma/                       # Database schema and migrations
└── public/                       # Static assets
```
