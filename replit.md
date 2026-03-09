# replit.md

## Overview

This is a marketing/landing page website for **Social Wrenchers**, a tech company offering web development, mobile solutions, cloud infrastructure, and cybersecurity services. The site is a single-page application with sections for Hero, About, Services, and Contact, featuring animated scroll effects and a contact form that saves messages to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight React router) — currently only has a Home page and 404
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode neon aesthetic with electric violet/cyan accents)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives, located in `client/src/components/ui/`
- **Animations**: Framer Motion for complex animations, react-intersection-observer for scroll-triggered effects
- **Forms**: react-hook-form with Zod validation via @hookform/resolvers
- **State/Data Fetching**: TanStack React Query for server state management
- **Fonts**: Outfit (body) and Space Grotesk (display), loaded via Google Fonts

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx in dev)
- **Architecture**: Single `server/routes.ts` registers API endpoints on an HTTP server. Storage layer (`server/storage.ts`) abstracts database operations behind an `IStorage` interface
- **API Design**: Route definitions live in `shared/routes.ts` with Zod schemas for input validation and response types, shared between client and server
- **Dev Server**: Vite dev server is integrated as Express middleware during development (`server/vite.ts`), with HMR support
- **Production Build**: Client built with Vite, server bundled with esbuild into `dist/` directory. The build script (`script/build.ts`) selectively bundles certain dependencies to reduce cold start times

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` — currently has one table: `contact_messages` (id, name, email, message, createdAt)
- **Validation**: drizzle-zod generates Zod schemas from table definitions for type-safe validation
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Connection**: node-postgres Pool via `DATABASE_URL` environment variable

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/` (configured in Vite only)

### API Endpoints
| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/contact` | Submit a contact form message (name, email, message) |

### Key Design Patterns
- **Shared types/schemas**: The `shared/` directory contains both database schema and API route definitions, ensuring type safety across client and server
- **Type-safe API contracts**: `shared/routes.ts` defines input/output schemas per endpoint; the client validates responses against these schemas
- **Storage interface**: `IStorage` interface in `server/storage.ts` abstracts data access, making it possible to swap implementations

## External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable. Used with Drizzle ORM and connect-pg-simple for potential session storage
- **Google Fonts**: Outfit, Space Grotesk, DM Sans, Fira Code, Geist Mono loaded from fonts.googleapis.com
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` — development-only Replit integrations
- **Static Assets**: Company logo stored in `attached_assets/` directory, referenced via `@assets` alias