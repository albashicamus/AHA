# AHA - Affordable Housing Assistance

A comprehensive web application that helps users find and apply to local, state, and national affordable housing programs.

## 🏠 About AHA

AHA (Affordable Housing Assistance) is designed to simplify the process of finding and applying for housing assistance programs. Our platform connects families and individuals with relevant housing programs based on their specific circumstances and location.

## ✨ Features

- **Personalized Program Matching**: Input your information and get matched with relevant housing programs
- **Comprehensive Database**: Access local, state, and federal housing assistance programs
- **User-Friendly Interface**: Clean, accessible design built with modern web technologies
- **Secure Data Handling**: Built with privacy and security in mind
- **Mobile Responsive**: Works seamlessly across all devices

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aha/web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── apply/             # Application form page
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable UI components
│   └── ui/               # Base UI components
├── lib/                  # Utility functions and configurations
│   ├── supabase.ts       # Supabase client configuration
│   └── utils.ts          # General utilities
└── styles/               # Global styles
```

## 🎯 Housing Programs Covered

- **Section 8 Housing Choice Vouchers**: Federal rental assistance
- **Public Housing**: Federally funded housing units
- **State Housing Programs**: State-specific assistance programs
- **Local Housing Assistance**: City and county programs
- **Veterans Housing Programs**: Specialized veteran assistance
- **Senior Housing**: Age-restricted housing programs

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run type-check` - Run TypeScript type checking

## 🗄 Database Setup

This project uses Supabase for the database. Set up your Supabase project and configure the environment variables as described in the installation steps.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions, please contact our support team or create an issue in the repository.

---

**AHA - Connecting families with affordable housing opportunities nationwide.**
