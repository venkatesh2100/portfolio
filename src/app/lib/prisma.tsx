// // lib/prisma.ts
// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";

// // Extending the global object to add the prisma property
// declare global {
//   const prisma: PrismaClient | undefined;
// }

// // Check if prisma already exists in global scope
// let prisma: PrismaClient;

// if (!global.prisma) {
//   prisma = new PrismaClient().$extends(withAccelerate());
//   global.prisma = prisma; // Save prisma instance in global object for reuse
// } else {
//   prisma = global.prisma;
// }

// export default prisma;
