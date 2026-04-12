import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    phone: v.string(),
    course: v.string(),
    location: v.string(),
    status: v.optional(v.string()), // e.g., 'new', 'contacted'
    createdAt: v.number(),
  }),
  courses: defineTable({
    name: v.string(),
    duration: v.string(),
    mode: v.string(), // Hybrid, Online, Offline
    slug: v.string(),
    description: v.optional(v.string()),
    features: v.optional(v.array(v.string())),
    curriculum: v.optional(v.array(v.string())),
  }).index("by_slug", ["slug"]),
  testimonials: defineTable({
    name: v.string(),
    role: v.string(), // Student, Parent
    content: v.string(),
    rating: v.number(),
  }),
  results: defineTable({
    studentName: v.string(),
    exam: v.string(), // NEET, JEE etc.
    rank: v.string(),
    year: v.number(),
    imageUrl: v.optional(v.string()),
  }),
});
