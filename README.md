# OSSBeat - Open Source Repository Discovery Platform

OSSBeat is a comprehensive platform that helps developers discover suitable open-source repositories, track their contributions, and get mentorship for programs like Google Summer of Code (GSoC). The platform provides personalized repository recommendations based on user profiles and contribution history.

## ✨ Features

- 🔍 **Repository Discovery**: Find OSS repositories that match your skills and interests
- 👥 **GitHub Integration**: Seamless OAuth authentication with GitHub
- 📊 **Contribution Tracking**: Monitor your open-source contributions and statistics
- 🎯 **Personalized Recommendations**: AI-powered repository suggestions based on your profile
- 📈 **Progress Analytics**: Visualize your open-source journey and growth
- 🏆 **GSoC Preparation**: Get expert mentorship and guidance for Google Summer of Code
- 🌙 **Dark Mode**: Modern UI with theme switching capabilities

## 🏗️ Architecture

OSSBeat follows a modern monorepo architecture using Turborepo:

```
ossbeat/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── backend/      # Express.js API server
├── packages/
│   ├── database/     # Prisma database client & migrations
│   ├── ui/           # Shared React components
│   ├── eslint-config/# ESLint configurations
│   └── typescript-config/ # TypeScript configurations
└── turbo.json        # Turborepo configuration
```

### System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js Web   │    │  Express API    │    │   PostgreSQL    │
│   Frontend      │◄──►│   Backend       │◄──►│   Database      │
│                 │    │                 │    │                 │
│ - React 19      │    │ - TypeScript    │    │ - Prisma ORM    │
│ - Tailwind CSS  │    │ - JWT Auth      │    │ - User data     │
│ - Theme support │    │ - GitHub OAuth  │    │ - Repositories  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   GitHub API    │
                    │                 │
                    │ - OAuth         │
                    │ - Repository data│
                    │ - User profiles │
                    └─────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([Download here](https://nodejs.org/))
- **pnpm** package manager ([Install guide](https://pnpm.io/installation))
- **PostgreSQL** database ([Install guide](https://www.postgresql.org/download/))
- **GitHub OAuth App** ([Create here](https://github.com/settings/applications/new))

### Environment Variables

Create the following environment files:

#### Root `.env`

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ossbeat"
```

#### Backend `.env` (apps/backend/.env)

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ossbeat"

# GitHub OAuth
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GITHUB_REDIRECT_URI="http://localhost:4000/auth/github/callback"

# Frontend URL
FRONTEND_URL="http://localhost:3000"

# Environment
NODE_ENV="development"
```

#### Frontend `.env.local` (apps/web/.env.local)

```bash
# API URL
NEXT_PUBLIC_API_URL="http://localhost:4000"
```
>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)

### Installation

1. **Clone the repository**
<<<<<<< HEAD
   ```bash
   git clone https://github.com/your-org/ossbeat.git
   cd ossbeat
   ```

2. **Install dependencies**
=======

   ```bash
=======
# OSSBeat - Open Source Repository Discovery Platform

OSSBeat is a comprehensive platform that helps developers discover suitable open-source repositories, track their contributions, and get mentorship for programs like Google Summer of Code (GSoC). The platform provides personalized repository recommendations based on user profiles and contribution history.

## ✨ Features

- 🔍 **Repository Discovery**: Find OSS repositories that match your skills and interests
- 👥 **GitHub Integration**: Seamless OAuth authentication with GitHub
- 📊 **Contribution Tracking**: Monitor your open-source contributions and statistics
- 🎯 **Personalized Recommendations**: AI-powered repository suggestions based on your profile
- 📈 **Progress Analytics**: Visualize your open-source journey and growth
- 🏆 **GSoC Preparation**: Get expert mentorship and guidance for Google Summer of Code
- 🌙 **Dark Mode**: Modern UI with theme switching capabilities

## 🏗️ Architecture

OSSBeat follows a modern monorepo architecture using Turborepo:

```
ossbeat/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── backend/      # Express.js API server
├── packages/
│   ├── database/     # Prisma database client & migrations
│   ├── ui/           # Shared React components
│   ├── eslint-config/# ESLint configurations
│   └── typescript-config/ # TypeScript configurations
└── turbo.json        # Turborepo configuration
```

### System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js Web   │    │  Express API    │    │   PostgreSQL    │
│   Frontend      │◄──►│   Backend       │◄──►│   Database      │
│                 │    │                 │    │                 │
│ - React 19      │    │ - TypeScript    │    │ - Prisma ORM    │
│ - Tailwind CSS  │    │ - JWT Auth      │    │ - User data     │
│ - Theme support │    │ - GitHub OAuth  │    │ - Repositories  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   GitHub API    │
                    │                 │
                    │ - OAuth         │
                    │ - Repository data│
                    │ - User profiles │
                    └─────────────────┘
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([Download here](https://nodejs.org/))
- **pnpm** package manager ([Install guide](https://pnpm.io/installation))
- **PostgreSQL** database ([Install guide](https://www.postgresql.org/download/))
- **GitHub OAuth App** ([Create here](https://github.com/settings/applications/new))

### Environment Variables

Create the following environment files:

#### Root `.env`

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ossbeat"
```

#### Backend `.env` (apps/backend/.env)

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ossbeat"

# GitHub OAuth
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GITHUB_REDIRECT_URI="http://localhost:4000/auth/github/callback"

# Frontend URL
FRONTEND_URL="http://localhost:3000"

# Environment
NODE_ENV="development"
```

#### Frontend `.env.local` (apps/web/.env.local)

```bash
# API URL
NEXT_PUBLIC_API_URL="http://localhost:4000"
```
>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)

### Installation

1. **Clone the repository**
<<<<<<< HEAD
   ```bash
   git clone https://github.com/your-org/ossbeat.git
   cd ossbeat
   ```

2. **Install dependencies**
=======

   ```bash
   git clone https://github.com/Shailesh2302/OSSBeat.git
   cd OSSBeat
   ```

2. **Install dependencies**

>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)
   ```bash
   pnpm install
   ```

<<<<<<< HEAD
3. **Set up environment variables**

   Create `.env` in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/ossbeat"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   GITHUB_REDIRECT_URI="http://localhost:4000/auth/github/callback"
   FRONTEND_URL="http://localhost:3000"
   JWT_SECRET="your-jwt-secret"
   NODE_ENV="development"
   ```

4. **Set up the database**
=======
3. **Set up the database**

>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)
   ```bash
   # Generate Prisma client
   pnpm db:generate

   # Run migrations
   pnpm db:migrate
   ```

<<<<<<< HEAD
5. **Start development servers**
=======
4. **Start development servers**

>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)
   ```bash
   # Start all services
   pnpm dev

   # Or start individually:
<<<<<<< HEAD
   # pnpm --filter web dev      # Frontend on :3000
   # pnpm --filter backend dev  # Backend on :4000
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 API Documentation

### Authentication Endpoints

#### POST /auth/github
Initiates GitHub OAuth flow.

**Response**: Redirects to GitHub authorization URL

#### GET /auth/github/callback
Handles OAuth callback and issues JWT tokens.

**Query Parameters**:
- `code`: Authorization code from GitHub
- `state`: CSRF protection token

### Repository Endpoints

#### GET /repo/discover
Discovers repositories with filtering and pagination.

**Query Parameters**:
- `cursor`: Pagination cursor
- `limit`: Results per page (default: 20)
- `language`: Filter by programming language
- `minStars`: Minimum star count
- `topics`: Comma-separated topic list

**Response**:
```json
{
  "repos": [...],
  "nextCursor": "cursor_string",
  "hasNextPage": true
}
```

#### GET /repo/:id
Gets detailed repository information.

#### GET /user/stats
Gets user contribution statistics.

### Webhook Endpoints

#### POST /github/webhook
Processes GitHub webhook events.

**Headers**:
- `X-GitHub-Event`: Event type
- `X-Hub-Signature-256`: Webhook signature

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork and clone** the repository
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make your changes** following our coding standards
4. **Run tests**: `pnpm test`
5. **Run linting**: `pnpm lint`
6. **Commit with conventional commits**: `git commit -m "feat: add new feature"`
7. **Push and create PR**

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with Next.js and React rules
- **Prettier**: Code formatting with Tailwind plugin
- **Husky**: Pre-commit hooks for quality checks
=======
   pnpm --filter web dev      # Frontend on http://localhost:3000
   pnpm --filter backend dev  # Backend on http://localhost:4000
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000

## 📁 Project Structure

```
ossbeat/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── config/        # Environment configuration
│   │   │   ├── middleware/    # Express middleware
│   │   │   ├── modules/       # Feature modules
│   │   │   │   ├── auth/      # Authentication logic
│   │   │   │   ├── repo/      # Repository management
│   │   │   │   ├── user/      # User management
│   │   │   │   └── hook/      # GitHub webhooks
│   │   │   ├── types/         # TypeScript type definitions
│   │   │   ├── utils/         # Utility functions
│   │   │   └── index.ts       # Server entry point
│   │   └── package.json
│   └── web/
│       ├── app/               # Next.js app router
│       ├── components/        # React components
│       ├── lib/               # Utility libraries
│       ├── types/             # TypeScript types
│       └── utils/             # Helper functions
├── packages/
│   ├── database/
│   │   ├── prisma/
│   │   │   ├── schema.prisma  # Database schema
│   │   │   └── migrations/    # Database migrations
│   │   └── src/
│   │       ├── client.ts      # Prisma client
│   │       └── index.ts
│   ├── ui/                    # Shared UI components
│   ├── eslint-config/         # ESLint configurations
│   └── typescript-config/     # TypeScript configurations
├── package.json
├── turbo.json                 # Turborepo configuration
└── README.md
```

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User**: User profiles and authentication data
- **Provider**: OAuth provider information (GitHub)
- **Repository**: GitHub repository data
- **Contribution**: User contributions to repositories
- **UserRepoStat**: User statistics per repository
- **RecommendedRepo**: AI-powered repository recommendations
- **RefreshToken**: JWT refresh token storage

## 🔐 Authentication Flow

1. User clicks "Login with GitHub"
2. Redirected to GitHub OAuth authorization
3. GitHub redirects back with authorization code
4. Backend exchanges code for access token
5. User profile data fetched from GitHub API
6. JWT tokens generated and stored
7. User redirected to dashboard

## 📡 API Documentation

### Authentication Endpoints

- `POST /auth/github` - Initiate GitHub OAuth login
- `POST /auth/github/callback` - Handle OAuth callback
- `POST /auth/refresh` - Refresh JWT tokens
- `POST /auth/logout` - Logout user

### Repository Endpoints

- `GET /repo/discover` - Discover repositories with pagination
- `GET /repo/:id` - Get repository details
- `POST /repo/track` - Start tracking a repository
- `DELETE /repo/:id/track` - Stop tracking repository

### User Endpoints

- `GET /user/profile` - Get user profile
- `PUT /user/profile` - Update user profile
- `GET /user/stats` - Get user contribution statistics
- `GET /user/repositories` - Get user's tracked repositories

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev                    # Start all development servers
pnpm build                  # Build all packages and apps
pnpm lint                   # Run ESLint
pnpm check-types           # Run TypeScript type checking

# Database
pnpm db:generate           # Generate Prisma client
pnpm db:migrate            # Run database migrations
pnpm db:deploy             # Deploy migrations to production
pnpm db:studio             # Open Prisma Studio

# Individual services
pnpm --filter web dev      # Start web app only
pnpm --filter backend dev  # Start backend only
```

### Code Quality

- **ESLint**: Configured with Next.js and React rules
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking enabled
- **Husky**: Pre-commit hooks for code quality

## 🚢 Deployment

### Backend Deployment

```bash
# Build the backend
pnpm --filter backend build

# The built files will be in apps/backend/dist/
```

### Frontend Deployment

```bash
# Build the web app
pnpm --filter web build

# The built files will be in apps/web/.next/
```

### Environment Setup for Production

Ensure all production environment variables are set:

```bash
# Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# GitHub OAuth (Production App)
GITHUB_CLIENT_ID="prod_client_id"
GITHUB_CLIENT_SECRET="prod_client_secret"
GITHUB_REDIRECT_URI="https://yourdomain.com/auth/github/callback"

# Frontend
FRONTEND_URL="https://yourdomain.com"

# Environment
NODE_ENV="production"
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'feat: add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Development Guidelines

- Write clear, concise commit messages
- Test your changes before submitting
- Update documentation for API changes
- Follow the existing code style
- Use TypeScript for type safety
>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

<<<<<<< HEAD
- [Turborepo](https://turbo.build/) for the monorepo tooling
- [Next.js](https://nextjs.org/) for the React framework
- [Prisma](https://www.prisma.io/) for the database ORM
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [GitHub](https://github.com/) for the platform and APIs
=======
- [Turborepo](https://turborepo.com/) for the monorepo tooling
- [Next.js](https://nextjs.org/) for the React framework
- [Prisma](https://prisma.io/) for the database ORM
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [GitHub](https://github.com/) for the OAuth and API services

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Shailesh2302/OSSBeat/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Shailesh2302/OSSBeat/discussions)
- **Email**: For business inquiries or partnerships
>>>>>>> 348b7bc (docs: add comprehensive environment variables documentation to README)

---

Built with ❤️ for the open-source community
