// lib/prisma.ts

// create a prisma instance and cache it in developement
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

// we don't cache it in production
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
