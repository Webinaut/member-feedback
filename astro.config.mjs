// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://memberfeedback.netlify.app/", // Replace with your actual site URL
  integrations: [sitemap()],
});
