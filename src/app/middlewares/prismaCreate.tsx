// // lib/prismaMiddleware.ts
// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";
// import { NextApiRequest, NextApiResponse } from 'next';

// // Initialize Prisma Client with Accelerate extension
// const prisma = new PrismaClient({
//   datasources: {
//     db: { url: process.env.DATABASE_URL },
//   },
// }).$extends(withAccelerate());

// // Extend NextApiRequest to include prisma
// interface ExtendedNextApiRequest extends NextApiRequest {
//   prisma?: PrismaClient;
// }

// // Prisma middleware function
// export const prismaCreate = async (req: ExtendedNextApiRequest, res: NextApiResponse, next: Function) => {
//   try {
//     // Attach Prisma to the request object (acts like middleware)
//     req.prisma = prisma;

//     // Call the next handler in the chain
//     await next();
//   } catch (e) {
//     // Handle errors
//     res.status(403).json({ message: 'Error while connecting to database' });
//   }
// };
