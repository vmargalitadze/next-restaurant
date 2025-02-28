import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import ws from 'ws';

// Enable WebSocket connections for Neon
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not defined");

// Create a Neon connection pool
const pool = new Pool({ connectionString });

// Use PrismaNeon adapter
const adapter = new PrismaNeon(pool);

// Initialize Prisma Client
export const prisma = new PrismaClient({ adapter });