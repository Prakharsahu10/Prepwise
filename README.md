# Echofy - AI-Powered Interview Practice Platform

Echofy is a modern web application that helps users prepare for technical interviews using AI-powered practice sessions and feedback. The platform provides a realistic interview experience with instant feedback and personalized guidance.

## Features

- 🤖 AI-powered interview simulations
- 📊 Real-time feedback and analysis
- 🎯 Role-specific interview questions
- 🔄 Multiple interview types and tech stacks
- 📱 Responsive design for all devices
- 🔒 Secure authentication with Firebase
- 🌙 Dark/Light mode support

## Tech Stack

- **Framework:** Next.js 15.3.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Firebase
- **AI Integration:** Google AI SDK, Vapi AI
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **State Management:** React Hooks
- **Animations:** Tailwind Animate

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- Firebase account
- Google AI API access

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/echofy.git
   cd echofy
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
echofy/
├── app/                 # Next.js app directory
│   ├── (root)/         # Main application routes
│   ├── api/            # API routes
│   └── (auth)/         # Authentication routes
├── components/         # Reusable React components
├── lib/               # Utility functions and actions
├── types/             # TypeScript type definitions
├── constants/         # Application constants
├── firebase/          # Firebase configuration
└── public/            # Static assets
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Firebase for authentication and database services
- Google AI for providing the AI capabilities
- All contributors who have helped shape this project
