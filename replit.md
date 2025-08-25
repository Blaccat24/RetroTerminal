# Overview

This is a cyberpunk-themed interactive web application called "Neon City" that features a 3-step investigation system for intermediate developers and puzzle enthusiasts. The application combines retro-futuristic aesthetics with educational web development challenges including simple Base64 decoding, DOM inspection, and fragment assembly. It's built as a full-stack application with React frontend, Express.js backend, and includes a user-friendly terminal-based investigation interface that teaches basic browser development tools.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern React application using functional components and hooks
- **Vite Build System**: Fast development server and optimized production builds
- **Component Structure**: Modular design with reusable UI components organized in `/client/src/components/`
- **Routing**: Client-side routing using Wouter library for lightweight navigation
- **State Management**: React Query (@tanstack/react-query) for server state management and local React state for UI interactions

## Styling and Design System
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui Components**: Pre-built, accessible component library with Radix UI primitives
- **Custom Cyberpunk Theme**: Extensive CSS custom properties for neon colors, animations, and retro-futuristic effects
- **Typography**: Custom font integration (Orbitron, Courier Prime) for cyberpunk aesthetics
- **Animations**: CSS animations for glitch effects, neon pulsing, matrix backgrounds, and floating elements

## Backend Architecture
- **Express.js Server**: RESTful API server with middleware for logging and error handling
- **Modular Routing**: Centralized route registration system in `/server/routes.ts`
- **Storage Interface**: Abstracted storage layer with in-memory implementation and interface for future database integration
- **Development Setup**: Integrated Vite development server with hot module replacement

## Data Storage Strategy
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **Database Schema**: User management system with username/password authentication
- **Flexible Storage**: Interface-based storage design allowing easy switching between in-memory and database implementations
- **Migration Support**: Database migration system using Drizzle Kit

## Interactive Features
- **3-Step Investigation System**: Simple, educational challenge system teaching web development skills
- **Progressive Learning**: Step-by-step progression with clear guidance and feedback
- **Interactive Visual Effects**: Matrix rain animations and cyberpunk aesthetics
- **Terminal Command Interface**: User-friendly command system with helpful error messages
- **Browser Tools Education**: Teaches practical usage of F12 developer tools
- **No Time Pressure**: Relaxed environment for learning and exploration

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18+ with TypeScript, React DOM, and development tools
- **Vite**: Development server and build tool with plugin ecosystem
- **Express.js**: Node.js web server framework for API development

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS integration
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating variant-based component APIs

## Database and State Management
- **Drizzle ORM**: Modern TypeScript ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation

## Development and Build Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server-side code
- **TSX**: TypeScript execution environment for development
- **Replit Integration**: Custom plugins for Replit development environment

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library
- **React Router Alternative**: Minimalist routing solution for single-page applications

## Additional Utilities
- **Date-fns**: Modern date utility library
- **clsx**: Utility for constructing className strings
- **Nanoid**: Secure URL-friendly unique string ID generator
- **Zod**: TypeScript-first schema validation library