import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({

  integrations: [tailwind(), mdx()],

  devToolbar: {
    enabled: false
  },

  site: 'https://jb18.cm',

  prefetch: {
    prefetchAll: true
  }
  
});