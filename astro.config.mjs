import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";

export default defineConfig({
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },

  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },

  site: "https://sportfx.ai",
  integrations: [
    sitemap(),
    mdx(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
});