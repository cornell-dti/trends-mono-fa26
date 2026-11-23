# Build stage
FROM node:22-alpine AS builder
WORKDIR /app

# Pin pnpm to keep installs compatible with the lockfile.
# If upgrading, update build and production stages, and package.json, then test the Docker build.
RUN npm install -g pnpm@10.34.9

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM node:22-alpine
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10.34.9

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Copy .env if it exists (for forcibly reading from .env)
COPY .env* ./

# Expose port — change if you use different port!
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
