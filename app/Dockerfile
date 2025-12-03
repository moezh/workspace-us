FROM oven/bun:alpine AS base
WORKDIR /app
COPY . .

# Development target
FROM base AS development
ENV NODE_ENV=development
EXPOSE 4321
ENTRYPOINT ["sh", "-c", "bun --bun install && bun --bun run dev --host 0.0.0.0 --port 4321"]

# Production target
FROM base AS production
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
ENTRYPOINT ["sh", "-c", "bun --bun install --production && bun --bun run build && bun --bun ./dist/server/entry.mjs"]