# syntax=docker/dockerfile:1.7
#
# Multi-stage production Dockerfile for the BookZync Next.js site.
# Final image is ~150MB (vs ~1.5GB for a naive build).
#
# Build: docker build -t bookzync-website .
# Run:   docker run -p 3000:3000 bookzync-website

# ─── Stage 1: install deps ─────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

# Install only what's needed to install npm packages
COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

# ─── Stage 2: build ────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build the production bundle
RUN npm run build

# ─── Stage 3: runtime ──────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Copy the standalone build output (set in next.config.ts below)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
