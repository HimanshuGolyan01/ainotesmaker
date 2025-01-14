import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {
      name: v.string(), 
      email: v.string(),
      imageUrl: v.string(),
    },
    handler: async (ctx, args) => {
      const user = await ctx.db.user.query('user')
        .filter((q) => q.eq(q.field('email'), args.email))
        .collect();
  
      if (user?.length === 0) {
        await ctx.db.user.insert('user', {
          email: args.email,
          name: args.name, 
          imageUrl: args.imageUrl,
        });
        return "new user inserted";
      }
      return "user already exists";
    }
  });

    
  