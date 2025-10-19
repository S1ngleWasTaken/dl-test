// src/content/config.ts
import { defineCollection, z } from "astro:content";

// 1. Vytvoříme schéma pro "blog"
// 'z' je Zod, knihovna pro validaci schémat
const blogCollection = defineCollection({
  type: "content", // 'content' = Markdown/MDX. 'data' = JSON/YAML
  schema: z.object({
    title: z.string(),
    date: z.date(), // Decap 'datetime' Astro automaticky převede na JS Date objekt
    ogImage: z.string().optional(), // 'image' je v Decapu cesta (string). .optional() pro případ, že ho nezadáš
    description: z.string(),
    // 'body' (ten markdown obsah) se nedefinuje, Astro ho bere automaticky
  }),
});

// 2. Vytvoříme schéma pro "aktualita"
const aktualitaCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // 'body' je opět automaticky
  }),
});

// 3. Exportujeme všechny kolekce
export const collections = {
  blog: blogCollection,
  aktualita: aktualitaCollection,
};
