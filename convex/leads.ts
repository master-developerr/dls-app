import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const captureLead = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    course: v.string(),
    location: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("leads", {
      ...args,
      status: "new",
      createdAt: Date.now(),
    });
  },
});

export const getLeads = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("leads").order("desc").collect();
  },
});
