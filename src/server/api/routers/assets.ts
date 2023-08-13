import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "y/server/api/trpc";

export const assetsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.assets.findMany();
  }),
  
});
