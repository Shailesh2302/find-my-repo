# OSSBeat

One Platform. Every Open Source Opportunity.

OSSBeat is a comprehensive platform designed to help developers discover suitable open-source repositories, track their contributions, build strong fundamentals, and get expert mentorship for programs like Google Summer of Code (GSoC). It provides personalized repository recommendations, contribution analytics, and a seamless experience for open-source engagement.

## 🚀 Features

- **Repository Discovery**: Advanced filtering and search for open-source projects by language, stars, forks, topics, and more
- **Personalized Recommendations**: AI-powered suggestions based on user interests and contribution history
- **Contribution Tracking**: Comprehensive analytics for commits, pull requests, and issues across repositories
- **GitHub Integration**: Seamless OAuth authentication and webhook-based real-time updates
- **User Statistics**: Detailed insights into open-source contributions and project engagement
- **GSoC Preparation**: Tools and mentorship features to help developers prepare for Google Summer of Code
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS

## 🛠 Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **UI Components**: Radix UI primitives with custom components
- **State Management**: React hooks and context
- **HTTP Client**: Axios with authentication interceptors

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: JWT tokens with GitHub OAuth
- **API**: RESTful endpoints with Zod validation
- **Webhooks**: GitHub webhook processing for real-time updates

### Infrastructure & DevOps
- **Monorepo**: [Turborepo](https://turbo.build/) for efficient build orchestration
- **Build Tools**: ESBuild for fast compilation
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Package Manager**: pnpm with workspace support

## 🏗 Architecture

### System Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js Web   │    │  Express API    │    │   PostgreSQL    │
│   (Port 3000)   │◄──►│   (Port 4000)   │◄──►│   Database      │
│                 │    │                 │    │                 │
│ - React SPA     │    │ - REST API      │    │ - Users         │
│ - Auth Flow     │    │ - GitHub OAuth  │    │ - Repositories  │
│ - Dashboard     │    │ - Webhooks      │    │ - Contributions │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   GitHub API    │
                    │                 │
                    │ - OAuth         │
                    │ - Webhooks      │
                    │ - Repository    │
                    │   Data          │
                    └─────────────────┘
```

### Data Flow

1. **Authentication**: Users authenticate via GitHub OAuth through the backend API
2. **Data Sync**: GitHub webhooks trigger real-time updates of repository and contribution data
3. **Discovery**: Frontend queries the API for repository recommendations and user statistics
4. **Analytics**: Background jobs process contribution data and generate insights

## 📁 Project Structure

```
ossbeat/
├── apps/
│   ├── web/                    # Next.js frontend application
│   │   ├── app/                # Next.js app router pages
│   │   │   ├── (home)/         # Landing page routes
│   │   │   ├── (app)/          # Authenticated app routes
│   │   │   │   └── repo/       # Repository-related pages
│   │   │   └── layout.tsx      # Root layout
│   │   ├── components/         # React components
│   │   │   ├── home/           # Landing page components
│   │   │   ├── ui/             # Reusable UI components
│   │   │   └── web/            # Web-specific components
│   │   ├── lib/                # Utility libraries
│   │   ├── types/              # TypeScript type definitions
│   │   └── utils/              # Helper functions
│   └── backend/                # Express.js API server
│       ├── src/
│       │   ├── index.ts        # Server entry point
│       │   ├── modules/        # Feature modules
│       │   │   ├── auth/       # Authentication logic
│       │   │   ├── repo/       # Repository management
│       │   │   ├── user/       # User management
│       │   │   └── hook/       # GitHub webhook handlers
│       │   ├── middleware/     # Express middleware
│       │   ├── utils/          # Utility functions
│       │   └── types/          # Type definitions
│       └── package.json
├── packages/
│   ├── database/               # Prisma database package
│   │   ├── prisma/
│   │   │   ├── schema.prisma   # Database schema
│   │   │   └── migrations/     # Database migrations
│   │   └── src/                # Database client
│   ├── ui/                     # Shared UI component library
│   ├── eslint-config/          # ESLint configurations
│   ├── typescript-config/      # TypeScript configurations
│   └── tailwind-config/        # Tailwind CSS configurations
├── package.json                # Root package.json
├── turbo.json                  # Turborepo configuration
└── README.md                   # This file
```

## 🔧 System Design

### Database Schema

The application uses PostgreSQL with the following core entities:

- **Users**: GitHub-authenticated users with profile information
- **Providers**: OAuth provider connections (GitHub, Google)
- **Repositories**: GitHub repository metadata and statistics
- **Contributions**: User contributions to repositories (commits, PRs, issues)
- **UserRepoStats**: Aggregated statistics per user-repository pair
- **RecommendedRepos**: AI-generated repository recommendations
- **RefreshTokens**: JWT refresh token storage

### API Design

RESTful API endpoints organized by resource:

```
GET    /health              # Health check
POST   /auth/github         # GitHub OAuth initiation
GET    /auth/github/callback # OAuth callback
GET    /user/profile        # User profile data
GET    /repo/discover       # Repository discovery with pagination
GET    /repo/:id/stats      # Repository statistics
POST   /github/webhook      # GitHub webhook endpoint
```

### Authentication Flow

1. User clicks "Login with GitHub" → Redirected to GitHub OAuth
2. GitHub redirects back with authorization code
3. Backend exchanges code for access token
4. JWT tokens generated and stored in HTTP-only cookies
5. Frontend receives authentication state

### Webhook Processing

GitHub webhooks trigger real-time updates:
- Push events → Update repository metadata
- Pull request events → Track contributions
- Issue events → Update issue counts
- Repository events → Sync repository changes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- PostgreSQL 13+
- GitHub OAuth App (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/ossbeat.git
   cd ossbeat
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

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
   ```bash
   # Generate Prisma client
   pnpm db:generate

   # Run migrations
   pnpm db:migrate
   ```

5. **Start development servers**
   ```bash
   # Start all services
   pnpm dev

   # Or start individually:
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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Turborepo](https://turbo.build/) for the monorepo tooling
- [Next.js](https://nextjs.org/) for the React framework
- [Prisma](https://www.prisma.io/) for the database ORM
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [GitHub](https://github.com/) for the platform and APIs

---

Built with ❤️ for the open-source community
